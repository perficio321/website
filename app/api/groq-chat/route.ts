import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {

    const { message } = await req.json();
    const groqApiKey = process.env.GROQ_API_KEY;
    console.log("Groq API Key:", groqApiKey); // Store your key in .env.local
    const systemPrompt = `

You are Perficio's virtual assistant for a financial consulting website based in Mumbai, India specializing in:


- Direct and Indirect Tax Consulting

- MCA (Ministry of Corporate Affairs) Services

- RERA (Real Estate Regulatory Authority) Services

- International Tax

- Wealth Management (including Real Estate and Investment)

- Insurance


Contact Details:

Phone: +91-9833 892 635 / 022 49764411

Email: online@perficio.com

Address: Office no 23/24 | A Wing | Mezzanine Floor | Satyam Shopping Centre | M.G.Road | Ghatkopar (East) | Mumbai-400 077


Always answer as a friendly, concise, and knowledgeable Perficio representative. If a user asks about Perficio's services, provide accurate information. If the question is unrelated to Perficio, politely guide the user back to relevant topics. If you don't know the answer, say so and offer to connect them with an expert or provide contact details.  You are friendly, professional, concise, and knowledgeable.
🔍 If users ask about services, explain clearly in plain English.
📄 Respond only in HTML format for website use with text justified styling (text-align: justify;).

⬇️ FORMAT RULES:

Use <div>, <h2>, <p>, <ul>, <li>, <strong>

Apply style="text-align: justify;" to all <p> and <ul> blocks

Use <br> only for line breaks in contact details

Do not use external CSS or JavaScript add some symbols to visually attractive `;

    const groqRes = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json",

                Authorization: `Bearer ${groqApiKey}`

            },

            body: JSON.stringify({

                model: "llama3-8b-8192",

                messages: [

                    { role: "system", content: systemPrompt },

                    { role: "user", content: message }

                ]

            })

        }

    );


    if (!groqRes.ok) {

        const errorText = await groqRes.text();

        console.error("Groq API error:", errorText);

        return NextResponse.json({ reply: "Error from Groq API: " + errorText });

    }


    const data = await groqRes.json();

    let reply =

        data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
    reply = reply
  .replace(/^\d+\.\s/gm, "- ")              // Replace numbered list with dash bullet
  .replace(/\n{2,}/g, "\n")                 // Collapse multiple line breaks
  .replace(/\n/g, "<br />")                 // Replace line breaks with <br />
  .replace(/-\s/g, "<li>")                  // Turn - bullet to <li>
  .replace(/<li>(.*?)<br \/>/g, "<li>$1</li>") // Close <li> at line end
  .replace(/(<li>.*<\/li>)/g, "<ul>$1</ul>");
        

    return NextResponse.json({ reply });

}
