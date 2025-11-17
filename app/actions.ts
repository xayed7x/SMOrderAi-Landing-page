"use server";

import { createClient } from '@/lib/supabase/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitPreRegistration(formData: FormData) {
  const supabase = createClient();
  
  const rawFormData = {
    full_name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone_number: formData.get('phone') as string,
    selected_plan: formData.get('selected_plan') as string,
  };

  try {
    // Step 1: Insert data into Supabase
    const { error } = await supabase.from('pre_registrations').insert([rawFormData]);
    if (error) {
      console.error('Supabase insert error:', error);
      throw new Error(error.message);
    }

    // Step 2: Send confirmation email with Resend
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: rawFormData.email,
      subject: '✅ You\'re on the list for Autex!',
      html: `Hi ${rawFormData.full_name},
        <p>Thank you for pre-registering for Autex. We have locked in your early-bird discount for the ${rawFormData.selected_plan} and will notify you as soon as we launch. Get ready to automate your business!</p>
        <p>— The Autex Team</p>`,
    });

    return { success: true, message: 'Registration successful!' };

  } catch (error) {
    console.error('Pre-registration error:', error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
}
