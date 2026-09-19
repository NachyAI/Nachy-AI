import {NextResponse} from "next/server";
export async function POST(req:Request){const body=await req.json();if(!body.prompt?.trim())return NextResponse.json({error:"A prompt is required."},{status:400});
return NextResponse.json({id:crypto.randomUUID(),status:"queued",message:"Generation job created. Video-provider integration is the next backend step.",request:body});}