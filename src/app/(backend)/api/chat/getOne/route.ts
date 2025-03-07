import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const message = await request.json();
  try {
    const response = await fetch(
      'http://127.0.0.1:8130/api/chat/getOne',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
          credentials: 'include', // 添加此行
        body:JSON.stringify(message),
      },
    );
    const data = await response.json();
      // 创建响应
      const nextResponse = NextResponse.json(data);

      // 获取Set-Cookie 头
      const cookie = response.headers.get('set-cookie');

      // 正确处理多个 cookie
      if (cookie) {
          nextResponse.headers.append('Set-Cookie', cookie);
          // 解析 cookie 字符串
          const [name, value] = cookie.split('=');
          // 存储 cookie
          nextResponse.cookies.set(name, value);
      }

      return nextResponse;
  } catch (error) {
    return NextResponse.error();
  }
}
