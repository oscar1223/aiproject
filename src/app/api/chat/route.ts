// app/api/chat/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { ChatOpenAI } from '@langchain/openai';

// Se ejecuta cuando le das a enviar mensaje
export async function POST(request: NextRequest) {
  const { message } = await request.json();

  const llm = new ChatOpenAI({
    openAIApiKey: '',
    modelName: "gpt-4o-mini",
    temperature:0,  
  })

  try {
    const response = await llm.invoke([{role: "user", content: message }]);
    const aiContent = response.content;
    //console.log(aiContent);

    return NextResponse.json({ text: aiContent});
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { text: 'Lo siento, ocurrió un error al procesar tu solicitud.' },
      { status: 500 }
    );
  }
}
