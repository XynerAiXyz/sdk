import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const analyzePrompt = async (prompt) => {
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a blockchain AI assistant." },
      { role: "user", content: prompt }
    ]
  });

  return completion.choices[0].message.content;
};
