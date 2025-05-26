import { NextResponse } from 'next/server';
import { serverApi, handleApiResponse } from '@/lib/server-api';

export async function POST(request: Request) {
  try {
    const message = await request.json();
    const response = await serverApi.post('/api/chat/historyWithWeights', message);
    return handleApiResponse(response);
  } catch (error) {
    console.error('获取带权重的对话历史失败:', error);
    return NextResponse.json(
      { code: 500, message: '获取带权重的对话历史失败', data: null },
      { status: 500 }
    );
  }
} 