import Link from "next/link";
export default function Home(){
 return <main>
  <nav><b className="brand">NACHY<span>AI</span></b><div><a href="#how">How It Works</a><a href="#features">Features</a><Link className="button small" href="/dashboard">Get Started</Link></div></nav>
  <section className="hero"><p className="eyebrow">AI POWERED. REAL RESULTS.</p><h1>Turn an idea<br/>into a <em>video.</em></h1>
   <p className="lead">Create scroll-stopping ads, Reels and social videos in minutes. No editing skills needed.</p>
   <Link className="button" href="/dashboard/create">Create Your First Video →</Link>
  </section>
  <section id="features" className="features"><article>⚡<b>AI-Powered</b><span>Script, scenes and creative direction.</span></article><article>◷<b>Create in Minutes</b><span>Go from idea to campaign fast.</span></article><article>▣<b>Built for Social</b><span>TikTok, Reels and Shorts ready.</span></article></section>
  <section id="how" className="statement"><p>BRANDS. CREATORS. BUSINESSES. EVERYONE.</p><h2>Content that works, powered by <em>NachyAI.</em></h2></section>
 </main>
}