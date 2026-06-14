import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: Request) {
  const { email, name } = await req.json();

  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
  }

  const sb = await createClient();

  const { error } = await sb.from('subscribers').insert({
    email: email.trim().toLowerCase(),
    name:  name?.trim() || null,
  });

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ error: 'This email is already subscribed.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
