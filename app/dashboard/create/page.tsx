"use client";
import {useState} from "react";
const styles=["Viral","Cinematic","UGC","Clean","Luxury","High Energy"];
export default function Create(){
 const [style,setStyle]=useState("Viral"),[prompt,setPrompt]=useState(""),[status,setStatus]=useState("");
 async function generate(){setStatus("Creating your NachyAI generation job…");const r=await fetch("/api/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt,style,duration:15,aspectRatio:"9:16"})});const d=await r.json();setStatus(d.message||d.error||"Generation queued.");}
 return <><header><div><p className="eyebrow">AI VIDEO STUDIO</p><h1>Create Your Video</h1><p>Turn your idea into scroll-stopping content.</p></div><div className="credits">◉ 1,250 Credits</div></header>
 <section className="panel form"><label>1 &nbsp; Upload Your Media <small>(optional)</small></label><div className="upload"><b>↑ Choose your files</b><span>Images, videos, logos or product photos</span><input type="file" multiple accept="image/*,video/*"/></div>
 <label>2 &nbsp; Describe Your Video</label><textarea value={prompt} onChange={e=>setPrompt(e.target.value)} placeholder="Make a 15 second high-energy TikTok ad for my product..."/>
 <label>3 &nbsp; Choose a Style</label><div className="styles">{styles.map(s=><button key={s} onClick={()=>setStyle(s)} className={style===s?"selected":""}>{s}</button>)}</div>
 <label>4 &nbsp; Video Settings</label><div className="settings"><span>TikTok / Reels</span><span>15 Seconds</span><span>Vertical 9:16</span><span>Captions On</span></div>
 <button className="button generate" disabled={!prompt.trim()} onClick={generate}>✦ Generate Video →</button>{status&&<p className="status">{status}</p>}</section></>
}