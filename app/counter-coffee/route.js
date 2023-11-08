import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  const user = await kv.get('coffeecounter');
  console.log('blah:', user)
  return NextResponse.json(user);
}