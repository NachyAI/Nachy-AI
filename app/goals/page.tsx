"use client";
import Link from "next/link";
import {useEffect,useState} from "react";

type Goal={id:number;title:string;target:string;amount?:string;current?:string;done:boolean};

export default function Goals(){
 const[goals,setGoals]=useState<Goal[]>([]);
 const[title,setTitle]=useState("");
 const[target,setTarget]=useState("");
 const[authorized,setAuthorized]=useState<boolean|null>(null);
 const[amount,setAmount]=useState("");
 const[current,setCurrent]=useState("");
 useEffect(()=>{try{const user=localStorage.getItem("nachyai-user");if(!user){location.replace("/signin?next=/goals");return}setAuthorized(true);const s=localStorage.getItem("nachyai-simple-goals");if(s)setGoals(JSON.parse(s))}catch{location.replace("/signin?next=/goals")}},[]);
 if(authorized!==true)return <main className="newHome cleanGoals"><section className="cleanGoalsMain"><p>Checking your account…</p></section></main>;
 function save(next:Goal[]){setGoals(next);localStorage.setItem("nachyai-simple-goals",JSON.stringify(next))}
 function add(e:React.FormEvent){e.preventDefault();if(!title.trim())return;save([...goals,{id:Date.now(),title:title.trim(),target,amount,current,done:false}]);setTitle("");setTarget("");setAmount("");setCurrent("")}
 function toggle(id:number){save(goals.map(g=>g.id===id?{...g,done:!g.done}:g))}
 function remove(id:number){save(goals.filter(g=>g.id!==id))}
 const completed=goals.filter(g=>g.done).length;
 return <main className="newHome cleanGoals">
  <aside className="newSide"><Link href="/" className="cleanGoalsBrand"><strong>NACHY<span>AI</span></strong></Link><nav><Link href="/">⌂ Home</Link><Link href="/assistant">▢ Chat</Link><Link className="active" href="/goals">◎ Goals</Link><Link href="/library">▤ Library</Link></nav></aside>
  <section className="cleanGoalsMain">
   <header><div><small>KEEP MOVING FORWARD</small><h1>Goals</h1><p>Set a goal, give it a date, and check it off when you're done.</p></div></header>
   <form className="simpleGoalForm" onSubmit={add}><input value={title} onChange={e=>setTitle(e.target.value)} placeholder="What do you want to accomplish?"/><input type="number" min="0" step="0.01" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Target amount ($)"/><input type="number" min="0" step="0.01" value={current} onChange={e=>setCurrent(e.target.value)} placeholder="Current amount ($)"/><input type="date" value={target} onChange={e=>setTarget(e.target.value)}/><button type="submit">＋ Add goal</button></form>
   <div className="simpleGoalSummary"><b>{goals.length-completed}</b><span>Active</span><b>{completed}</b><span>Completed</span></div>
   {!goals.length?<div className="simpleGoalEmpty"><h2>No goals yet</h2><p>Add one above. Keep it simple and focus on what matters next.</p></div>:<div className="simpleGoalList">{goals.map(g=><article key={g.id} className={g.done?"done":""}><button className="simpleGoalCheck" onClick={()=>toggle(g.id)}>{g.done?"✓":""}</button><div><h3>{g.title}</h3><small>{g.amount?"$"+Number(g.current||0).toLocaleString()+" of $"+Number(g.amount).toLocaleString()+" · "+Math.min(100,Math.round((Number(g.current||0)/Number(g.amount))*100))+"% · ":""}{g.target?"Target: "+g.target:"No target date"}</small></div><button className="simpleGoalDelete" onClick={()=>remove(g.id)}>×</button></article>)}</div>}
  </section>
 </main>
}