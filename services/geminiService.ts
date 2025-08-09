
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Lead } from '../types';

// This function must be run in an environment where process.env.API_KEY is configured.
// For this example, we will mock the response.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "mock_api_key" });

export const generateWeeklyInsights = async (leads: Lead[]): Promise<string> => {
    // In a real application, you would not pass all lead data.
    // Instead, you'd compute a summary first.
    const summary = {
        totalLeads: leads.length,
        newLeadsThisWeek: leads.filter(l => new Date(l.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length,
        appliedThisWeek: leads.filter(l => l.stage === 'Applied' && new Date(l.lastContacted) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length,
        droppedThisWeek: leads.filter(l => l.stage === 'Dropped' && new Date(l.lastContacted) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)).length,
        hotLeads: leads.filter(l => l.temperature === 'Hot').length,
    };

    const prompt = `
      You are an expert enrollment analyst for a university.
      Based on the following data summary for the past week, provide three concise, actionable insights for the enrollment team.
      Format the output as a simple, unstyled HTML list (<ul><li>...</li></ul>).

      Data Summary:
      - Total Leads: ${summary.totalLeads}
      - New Leads This Week: ${summary.newLeadsThisWeek}
      - Applications This Week: ${summary.appliedThisWeek}
      - Dropped Leads This Week: ${summary.droppedThisWeek}
      - Current 'Hot' Leads: ${summary.hotLeads}

      Provide actionable insights based on this data. For example, if new leads are high but applications are low, suggest a targeted follow-up campaign.
    `;
    
    // Mocking API call for browser-based demo
    if (!process.env.API_KEY) {
        console.warn("API_KEY environment variable not set. Using mock Gemini response.");
        return Promise.resolve(`
          <ul>
            <li><strong>Focus on Hot Leads:</strong> With ${summary.hotLeads} 'Hot' leads in the pipeline, prioritize immediate, personalized outreach to convert these high-intent prospects into applicants.</li>
            <li><strong>Boost Application Rate:</strong> You gained ${summary.newLeadsThisWeek} new leads, but only ${summary.appliedThisWeek} applied. Launch a targeted email campaign highlighting application benefits and deadlines.</li>
            <li><strong>Analyze Drop-offs:</strong> ${summary.droppedThisWeek} leads dropped off. Investigate the reasons. Was it a specific program? Follow up with a survey to gather feedback and improve the process.</li>
          </ul>
        `);
    }

    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        // The response text is returned directly. 
        // No need for complex parsing if you don't ask for JSON.
        return response.text;
    } catch (error) {
        console.error("Error generating insights from Gemini:", error);
        return "<p>Could not generate insights at this time. Please try again later.</p>";
    }
};
