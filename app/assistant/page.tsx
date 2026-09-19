"use client";
import Link from "next/link";
import {useState} from "react";
type Msg={role:"user"|"assistant";text:string};
export default function Assistant(){
 const [input,setInput]=useState("");
 const [messages,setMessages]=useState<Msg[]>([{role:"assistant",text:"I'm here. What's going on?"}]);
 function send(){const q=input.trim();if(!q)return;setMessages(m=>[...m,{role:"user",text:q},{role:"assistant",text:"I hear you. The live AI connection is the next step we're building, but this conversation experience is ready for it."}]);setInput("")}
 return <main className="coachChat">
  <aside className="coachSide"><Link href="/" className="coachBrand">Nachy<span>AI</span><small>Here for you.</small></Link><button className="newChat" onClick={()=>setMessages([{role:"assistant",text:"I'm here. What's going on?"}])}>＋ New conversation</button><nav><Link href="/">⌂ Home</Link><a className="active">◯ Chat</a><a>◎ Goals</a><a>▤ Library</a><a>⚙ Settings</a></nav><p className="coachSideNote">NachyAI can help you think, plan, write, learn, and work through everyday challenges.</p></aside>
  <section className="coachConversation"><header className="coachHeader"><div><b>NachyAI</b><small>AI life assistant</small></div><span>•••</span></header>
   <div className="coachMessages">{messages.map((m,i)=><div key={i} className={"coachMessage "+m.role}>{m.role==="assistant"&&<span className="coachAvatar">N</span>}<p>{m.text}</p></div>)}</div>
   <div className="coachBottom"><div className="coachSuggestions"><button onClick={()=>setInput("I need advice about something")}>I need advice</button><button onClick={()=>setInput("Help me make a plan")}>Make a plan</button><button onClick={()=>setInput("Help me make a decision")}>Help me decide</button></div><div className="coachComposer"><button>＋</button><textarea value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>{if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send()}}} placeholder="Message NachyAI..."/><button title="Voice">◉</button><button className="sendCoach" onClick={send}>↑</button></div><small>NachyAI can make mistakes. For important decisions, verify information.</small></div>
  </section>
 </main>
}