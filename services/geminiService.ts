import { GoogleGenAI } from "@google/genai";

/**
 * Analyzes an alert message to provide actionable insights.
 */
export const analyzeAlert = async (alertMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key is missing. Please configure the environment variable to use AI features.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      You are an AI Governance assistant in a Model Risk Management (MRM) system.
      Analyze the following system alert: "${alertMessage}".
      
      Provide a concise, 2-3 sentence explanation of what this alert means for a compliance officer and suggest one immediate action they should take.
      Keep the tone professional and authoritative.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "No analysis could be generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Failed to analyze the alert. Please try again later.";
  }
};