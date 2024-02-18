import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const message = await request.json();
  try {
    const response = await fetch(
      'http://127.0.0.1:8130/api/chat/add',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      },
    );
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error();
  }
}
