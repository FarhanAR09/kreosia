// app/api/login/route.js
import { cookies } from 'next/headers';
import bcrypt from 'bcryptjs';

const VALID_PASSWORD_HASH = process.env.LOGIN_PASSWORD_HASH;

export async function POST(req) {
  const { password } = await req.json();

  if (
    !(await bcrypt.compare(password, VALID_PASSWORD_HASH))
  ) {
    return Response.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  cookies().set('session_user', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 4 * 60 * 60, // 4 jam
    path: '/',
    password: password
  });

  return Response.json({ success: true });
}
