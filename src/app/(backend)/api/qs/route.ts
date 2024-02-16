import {NextResponse} from 'next/server';

export async function POST(request: Request) {
  const message = await request.json();
  try {
    const response = await fetch(
      'http://101.201.81.126:8000/api/qasystem/getRes',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: message
        }),
      },
    );

    const data = await response.json();
    return NextResponse.json(data);


  } catch (error) {
    return NextResponse.error();
  }
}
