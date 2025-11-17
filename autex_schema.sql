--
-- Autex AI SaaS - Initial Database Schema
-- Author: Gemini
-- Version: 1.1 (Corrected RLS Policies)
--

-- Enable the UUID extension if it's not already enabled.
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;

-- ----------------------------------------------------------------
-- Table 1: Pre-registrations (For the landing page form)
-- ----------------------------------------------------------------
CREATE TABLE public.pre_registrations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    phone_number TEXT,
    selected_plan TEXT NOT NULL, -- e.g., '1-month-trial', '3-month-pack'
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.pre_registrations IS 'Stores contact information of users who pre-register before launch.';

-- ----------------------------------------------------------------
-- Table 2: Users (Public profile data linked to Supabase auth)
-- ----------------------------------------------------------------
CREATE TABLE public.users (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    full_name TEXT,
    avatar_url TEXT,
    updated_at TIMESTAMPTZ
);
COMMENT ON TABLE public.users IS 'Stores public profile data for authenticated users.';

-- ----------------------------------------------------------------
-- Table 3: Workspaces (Represents a user''s business/team)
-- ----------------------------------------------------------------
CREATE TABLE public.workspaces (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    owner_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    subscription_status TEXT DEFAULT 'free_trial', -- e.g., 'active', 'past_due'
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.workspaces IS 'Represents a business or a team. All resources like pages and orders belong to a workspace.';

-- ----------------------------------------------------------------
-- Table 4: Workspace Members (Junction table for users and workspaces)
-- ----------------------------------------------------------------
CREATE TABLE public.workspace_members (
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    user_id UUID NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    role TEXT NOT NULL DEFAULT 'member', -- e.g., 'owner', 'admin', 'member'
    created_at TIMESTAMPTZ DEFAULT now(),
    PRIMARY KEY (workspace_id, user_id)
);
COMMENT ON TABLE public.workspace_members IS 'Manages user roles within each workspace.';

-- ----------------------------------------------------------------
-- Table 5: Facebook Pages (Pages connected to a workspace)
-- ----------------------------------------------------------------
CREATE TABLE public.facebook_pages (
    id BIGINT PRIMARY KEY, -- Using the actual Facebook Page ID as the primary key
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    page_name TEXT NOT NULL,
    encrypted_access_token TEXT NOT NULL, -- Access token should be encrypted before storing
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.facebook_pages IS 'Stores Facebook pages connected by a workspace.';

-- ----------------------------------------------------------------
-- Table 6: Orders (Orders created by the AI)
-- ----------------------------------------------------------------
CREATE TABLE public.orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    workspace_id UUID NOT NULL REFERENCES public.workspaces(id) ON DELETE CASCADE,
    fb_page_id BIGINT NOT NULL REFERENCES public.facebook_pages(id),
    customer_name TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_address TEXT NOT NULL,
    product_details JSONB, -- Flexible JSONB to store product name, size, color, quantity
    status TEXT DEFAULT 'pending', -- e.g., 'pending', 'confirmed', 'shipped'
    created_at TIMESTAMPTZ DEFAULT now()
);
COMMENT ON TABLE public.orders IS 'Stores all orders automatically created by the AI.';

-- ----------------------------------------------------------------
-- Row Level Security (RLS)
-- ----------------------------------------------------------------

-- Enable RLS for all relevant tables
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workspaces ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.workspace_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.facebook_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- Helper function to check if a user is a member of a workspace
CREATE OR REPLACE FUNCTION is_member_of_workspace(p_workspace_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1
        FROM public.workspace_members
        WHERE workspace_id = p_workspace_id AND user_id = auth.uid()
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

--
-- RLS Policies
--

-- Policies for `users` table
CREATE POLICY "Users can view their own data"
    ON public.users FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
    ON public.users FOR UPDATE
    USING (auth.uid() = id);

-- Policies for `workspaces` table
CREATE POLICY "Users can view workspaces they are a member of"
    ON public.workspaces FOR SELECT
    USING (is_member_of_workspace(id));

CREATE POLICY "Users can create workspaces"
    ON public.workspaces FOR INSERT
    WITH CHECK (auth.uid() = owner_id);

CREATE POLICY "Workspace owners can update their workspace"
    ON public.workspaces FOR UPDATE
    USING (auth.uid() = owner_id);

CREATE POLICY "Workspace owners can delete their workspace"
    ON public.workspaces FOR DELETE
    USING (auth.uid() = owner_id);

-- Policies for `workspace_members` table
CREATE POLICY "Users can view members of workspaces they belong to"
    ON public.workspace_members FOR SELECT
    USING (is_member_of_workspace(workspace_id));

CREATE POLICY "Workspace owners/admins can add new members"
    ON public.workspace_members FOR INSERT
    WITH CHECK ((SELECT role FROM public.workspace_members WHERE user_id = auth.uid() AND workspace_id = public.workspace_members.workspace_id) IN ('owner', 'admin'));

CREATE POLICY "Workspace owners/admins can remove members"
    ON public.workspace_members FOR DELETE
    USING ((SELECT role FROM public.workspace_members WHERE user_id = auth.uid() AND workspace_id = public.workspace_members.workspace_id) IN ('owner', 'admin'));

-- Policies for `facebook_pages` table
CREATE POLICY "Users can view pages in workspaces they are a member of"
    ON public.facebook_pages FOR SELECT
    USING (is_member_of_workspace(workspace_id));

CREATE POLICY "Users can add pages to workspaces they are a member of"
    ON public.facebook_pages FOR INSERT
    WITH CHECK (is_member_of_workspace(workspace_id));

CREATE POLICY "Users can update pages in workspaces they are a member of"
    ON public.facebook_pages FOR UPDATE
    USING (is_member_of_workspace(workspace_id));

CREATE POLICY "Users can delete pages from workspaces they are a member of"
    ON public.facebook_pages FOR DELETE
    USING (is_member_of_workspace(workspace_id));

-- Policies for `orders` table
CREATE POLICY "Users can view orders in workspaces they are a member of"
    ON public.orders FOR SELECT
    USING (is_member_of_workspace(workspace_id));

-- For now, we assume only the system (via service_role key) can create/update orders.
-- If users need to manage orders, more specific policies would be required.
CREATE POLICY "System can manage all orders"
    ON public.orders FOR ALL
    USING (false) -- Deny by default to users
    WITH CHECK (false);

-- A more permissive policy for users to manage orders if needed:
/*
CREATE POLICY "Users can manage orders in their workspaces"
    ON public.orders FOR ALL
    USING (is_member_of_workspace(workspace_id))
    WITH CHECK (is_member_of_workspace(workspace_id));
*/
