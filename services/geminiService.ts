import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateComfortingPoem = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Write a short, comforting, and beautiful poem about a guinea pig named Fiona. 
      She was black and white with a touch of brown. 
      She was playful, loving, and caring. 
      The user's input/context is: "${topic}". 
      Keep it under 100 words. Format it with line breaks.`,
    });
    
    return response.text || "Fiona, a gentle soul so sweet,\nA little friend we loved to meet.\nThough you are gone, your memory stays,\nBrightening up our future days.";
  } catch (error) {
    console.error("Error generating poem:", error);
    return "Fiona, playful and so kind,\nForever in our heart and mind.";
  }
};