import { GoogleGenAI } from "@google/genai";
import { DashboardData } from "../types";

// Initialize the client. We assume process.env.API_KEY is available.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const MODEL_NAME = 'gemini-2.5-flash';

export const generateGovernanceInsight = async (data: DashboardData, context: string): Promise<string> => {
  try {
    const prompt = `
      You are a Senior AI Governance Officer at Solytics Partners.
      Analyze the following dashboard data for our enterprise AI landscape.
      
      Context: ${context}
      
      Data:
      ${JSON.stringify(data, null, 2)}
      
      Please provide a concise, professional executive summary (max 150 words) focusing on risk exposure, compliance gaps, and recommended immediate actions. 
      Use a formal, authoritative tone suitable for a board report. 
      Do not use markdown formatting like bolding or headers, just plain text paragraphs.
    `;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });

    return response.text || "Unable to generate insights at this time.";
  } catch (error) {
    console.error("Error generating insight:", error);
    return "AI Insight generation failed. Please check your API configuration.";
  }
};

export const generateRiskMitigationPlan = async (modelName: string, riskScore: number): Promise<string> => {
  try {
    const prompt = `
      Create a brief 3-step risk mitigation plan for an AI model named "${modelName}" which has a risk score of ${riskScore}/100.
      Focus on data privacy, bias mitigation, and audit trails.
      Return the result as a raw string with numbered steps.
    `;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
    });

    return response.text || "Unable to generate plan.";
  } catch (error) {
    console.error("Error generating mitigation plan:", error);
    return "Plan generation failed.";
  }
};