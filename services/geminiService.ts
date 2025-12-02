import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askTradeAssistant = async (question: string, language: 'pt' | 'cn'): Promise<string> => {
  try {
    const context = language === 'pt' 
      ? "Você é um especialista em comércio exterior focado em importação da China para o Brasil. Responda de forma curta, agressiva e direta, focada em segurança e lucro. O usuário é um importador brasileiro com medo de golpes."
      : "You are a friendly and professional trade expert assistant for Chinese suppliers exporting to Brazil. Your tone is encouraging, respectful, and focused on business growth, partnership, and safety. You are helping a Chinese supplier understand the Brazilian market. Respond in Simplified Chinese.";

    const model = 'gemini-2.5-flash';
    
    const response = await ai.models.generateContent({
      model: model,
      contents: `${context}\n\nUser Question: ${question}`,
    });

    return response.text || (language === 'pt' ? "Desculpe, tente novamente." : "抱歉，请重试。");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return language === 'pt' 
      ? "Erro ao conectar com o assistente. Tente novamente." 
      : "连接助手时出错。请重试。";
  }
};