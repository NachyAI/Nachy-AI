import Link from "next/link";

export default function Library(){
 return <main className="newHome cleanGoals">
  <aside className="newSide">
   <Link href="/" className="cleanGoalsBrand"><strong>NACHY<span>AI</span></strong></Link>
   <nav>
    <Link href="/">⌂ <span>Home</span></Link>
    <Link href="/assistant">▢ <span>Assistant</span></Link>
    <Link href="/goals">◎ <span>Goals</span></Link>
    <Link className="active" href="/library">▤ <span>Library</span></Link>
   </nav>
  </aside>
  <section className="cleanGoalsMain">
   <header><div><small>YOUR SPACE</small><h1>Library</h1><p>Keep the conversations and plans that matter to you in one place.</p></div></header>
   <div className="libraryHero">
    <div><b>Your library</b><p>Saved conversations and things you choose to keep will appear here.</p></div>
    <Link href="/assistant">Start a conversation →</Link>
   </div>
   <div className="libraryRows">
    <article><span>▤</span><div><b>Saved conversations</b><p>Return to conversations that matter.</p></div></article>
    <article><span>✓</span><div><b>Plans & notes</b><p>Keep useful plans and notes together.</p></div></article>
    <article><span>◎</span><div><b>Goals</b><p>Your goals stay available from the Goals page.</p></div></article>
   </div>
  </section>
 </main>
}