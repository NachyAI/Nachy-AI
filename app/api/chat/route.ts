export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    if (!process.env.OPENAI_API_KEY) return Response.json({error:"NachyAI is not connected yet."},{status:503});
    const input = (messages || []).slice(-20).map((m:{role:string;text:string})=>({role:m.role,content:m.text}));
    const r = await fetch("https://api.openai.com/v1/responses", {
      method:"POST",
      headers:{"Content-Type":"application/json","Authorization":`Bearer ${process.env.OPENAI_API_KEY}`},
      body:JSON.stringify({
        model:"gpt-5.6-luna",
        instructions:"You are NachyAI, a warm, practical AI life assistant. Help with everyday decisions, goals, planning, writing, learning, relationships, work, and problem solving. Be supportive without being preachy. Ask useful questions when needed. Never pretend to be human or a licensed professional. For high-stakes medical, legal, or financial issues, clearly encourage appropriate professional help. If there is an immediate safety emergency, encourage contacting local emergency services or an appropriate crisis service.",
        input,
        reasoning:{effort:"low"},
        max_output_tokens:1200
      })
    });
    const data=await r.json();
    if(!r.ok) return Response.json({error:data?.error?.message||"AI request failed."},{status:r.status});
    const text=(data.output||[]).flatMap((o:any)=>o.content||[]).filter((c:any)=>c.type==="output_text").map((c:any)=>c.text).join("\n").trim();
    return Response.json({text:text||"I couldn't generate a response. Please try again."});
  } catch { return Response.json({error:"Something went wrong."},{status:500}); }
}