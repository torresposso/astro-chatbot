import { streamText } from "ai";
import type { APIRoute } from "astro";

import { createGoogleGenerativeAI } from '@ai-sdk/google';

const google = createGoogleGenerativeAI({
    apiKey: import.meta.env.GOOGLE_GENERATIVE_AI_API_KEY,
  });

export const POST: APIRoute = async ({ request }) => {
  const { messages } = await request.json();

  const result = await streamText({
    model: google("gemini-1.5-flash-latest", {

    }),
    messages,
  });

  const res = result.toDataStreamResponse()

  return res
};