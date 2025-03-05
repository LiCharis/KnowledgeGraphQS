import {NextResponse} from 'next/server';
import { cookies } from 'next/headers';
export async function POST(request: Request) {
    const message = await request.json();
    const cookieStore = cookies();
    try {
        const response = await fetch(
            'http://127.0.0.1:8130/api/chat/getRes',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Cookie': cookieStore.getAll()
                        .map(cookie => `${cookie.name}=${cookie.value}`)
                        .join('; '),
                },
                credentials: 'include', // 添加此行使用cookies
                body: JSON.stringify(
                    message
                ),
                mode: "cors", // 以CORS的形式跨域
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
