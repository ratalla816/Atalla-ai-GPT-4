
// route.ts has Route Handlers ???

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge'; // provides optimal infrastructure for our API route (https://edge-runtime.vercel.app/)

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config);

//  POST localhost : 3000/api/chat
export async function POST(request: Request ) {
    const { messages } = await request.json(); // { messages: [] }

    // user messages
    console.log(messages);

    // GPT-4 system message tells GPT-4 how to act and should always be at the front of the array
   
    // createChatCompletion (get response from GPT-4)
    const response = await openai.createChatCompletion({
        model: 'gpt-4',
        stream: true,
        messages: [
            { role: "system", content: "You are a helpful assistant that provides clear and concise explanations." },
            ...messages
        ]
    })

    // create a stream of data from OpenAI (stream data to the frontend)
    const stream = await OpenAIStream(response); 

    // send the stream as a response to our client / frontend
    return new StreamingTextResponse(stream);
    
}

