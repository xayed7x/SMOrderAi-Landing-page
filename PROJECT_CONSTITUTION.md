# Project Constitution: Autex (v2)

This document serves as a comprehensive technical constitution for the Autex project, outlining its purpose, architecture, content structure, and core components based on a full analysis of the codebase.

## 1. Project Purpose & Name

- **Project Name:** Autex
- **Purpose:** Autex is a multi-tenant AI SaaS application designed to fully automate social commerce for businesses. It allows users to connect their Facebook pages and let an AI handle customer interactions, including comment replies, inbox management, and automated order taking.

## 2. Technology Stack

The project is built on a modern, serverless-focused stack.

- **Framework:** Next.js (v14.2.25)
- **Language:** TypeScript
- **Frontend:** React (v19)
- **Backend:** Next.js Server Actions
- **Database:** Supabase (PostgreSQL)
- **Email:** Resend
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/UI, Radix UI primitives, and custom components.
- **Component Variants:** `cva` (class-variance-authority) is used to create and manage component variants, as seen in `components/ui/button.tsx`.

## 3. Project Structure

The codebase is organized into the following key directories:

- **/app:** Contains the core application logic, including pages (`/` and `/contact`), layouts, and server actions (`actions.ts`).
- **/components:** Houses all reusable React components. This is further divided into page sections (e.g., `hero-section.tsx`) and generic UI elements (e.g., `ui/button.tsx`).
- **/lib:** Contains library code and utilities, including the server-side Supabase client configuration (`lib/supabase/server.ts`).
- **/public:** Stores static assets like images, icons, and fonts.
- **/styles:** Contains global CSS styles.

## 4. Landing Page Content & Features (Detailed)

The main landing page (`app/page.tsx`) is composed of several distinct sections, each with a specific purpose.

- **Header (`components/header.tsx`):** A sticky navigation bar with links that smooth-scroll to the "Features", "Pricing", and "FAQ" sections. It features the brand logo as a Next.js `Image` component and includes a "Log in" button (currently a placeholder).
- **Hero Section (`components/hero-section.tsx`):** The main entry point, featuring the primary headline "Turn Social Comments Into Customers," a subheadline in Bengali, key value propositions, and a primary "Get Started" CTA that uses the `Button` component to smooth-scroll to the pricing section.
- **Problem Section (`components/problem-section.tsx`):** Highlights the pain points for businesses, such as missing customer responses, overwhelming comment volume, and high moderator costs.
- **Solution Section (`components/solution-section.tsx`):** Presents Autex's features as the solution, including "Auto Comment Reply," "Smart Intent Detection," and "Automated Inbox Delivery."
- **Vision Section (`components/vision-section.tsx`):** Showcases upcoming features like "AI Product Recognition" and "Automated Order Taking" to build excitement for the future of the product.
- **How It Works (`components/how-it-works.tsx`):** A simple 3-step guide on how to get started with Autex: Connect Page, Activate AI, and Watch Business Grow.
- **Testimonials Section (`components/testimonials-section.tsx`):** Displays social proof with quotes from fictional early adopters, rotating automatically.
- **Early Bird Pricing (`components/early-bird-pricing.tsx`):** Presents three distinct pricing plans: "1 Month Trial," "3 Month Pack," and "Founder's Price." Clicking a plan's CTA selects that plan and smooth-scrolls the user to the form.
- **Pre-registration Form (`components/pre-registration-form-section.tsx`):** The unified, client-side validated form where users can register. It handles loading, success, and error states to provide clear user feedback.
- **FAQ Section (`components/faq-section.tsx`):** An accordion-style FAQ to answer common questions about security, accuracy, payment, and cancellation.
- **CTA Section (`components/cta-section.tsx`):** A final call-to-action section that encourages users to sign up, using a `<button>` element that smooth-scrolls back to the pricing section.
- **Footer Section (`components/footer-section.tsx`):** Contains branding, social media links, navigation links, and contact information.

## 5. Other Pages

- **Contact Page (`app/contact/page.tsx`):** A simple page providing contact information, including email and WhatsApp.

## 6. Backend & Core Logic

- **Pre-registration Server Action (`app/actions.ts`):** A Next.js Server Action named `submitPreRegistration` handles the entire pre-registration logic. It receives form data, validates it, saves it to the Supabase `pre_registrations` table, and uses Resend to dispatch a confirmation email.

## 7. Database

The database schema is managed by Supabase (PostgreSQL) and is defined in the `autex_schema.sql` file in the project root.

- **Schema Definition:** The `autex_schema.sql` file contains the complete SQL script to set up all tables, relationships, and Row Level Security (RLS) policies.
- **Multi-tenancy:** The schema is designed for multi-tenancy, with data isolated by `workspaces`. RLS policies are in place to ensure users can only access data belonging to their own workspace.

## 8. Deployment

- **Hosting:** The application is deployed on Vercel.
- **Domain:** The live application is accessible at [https://autex.vercel.app/](https://autex.vercel.app/).

## 9. SEO and Social Sharing

The project implements comprehensive SEO and social sharing metadata to ensure professional representation on search engines and social media platforms.

- **Metadata:** The root layout (`app/layout.tsx`) exports a comprehensive `metadata` object containing default SEO and social sharing information for the entire site. This includes `title`, `description`, `metadataBase`, `openGraph`, and `twitter` properties.
- **Favicons:** The application uses favicons for all devices, placed in the `/app` directory.
- **Open Graph Image:** The Open Graph image (`/public/open graph.png`) is used for social sharing cards on platforms like Facebook, Twitter, and LinkedIn.