import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export const fetchCache = 'force-no-store';

export async function GET() {
  const coffeeChatsAided = await kv.get('coffeecounter');
  console.log('blah:', coffeeChatsAided);

  const res = new NextResponse(JSON.stringify(coffeeChatsAided), {
    status: 200, // HTTP status code
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      Pragma: 'no-cache',
      Expires: '0',
    },
  });

  return res;
}
