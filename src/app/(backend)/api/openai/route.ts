import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';


export const POST = async (request: Request) => {
  const { messages = [] }: Partial<{ messages: Array<any> }> = await request.json();

  const openai = new OpenAI({
    apiKey:"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",
    // baseURL: 'base url', // if u dont need change baseUrl，you can delete this line
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [...messages],
    stream: true,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
};
