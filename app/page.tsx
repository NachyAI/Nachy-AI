import Link from "next/link";
export default function Home(){
 return <main>
  <nav><b className="brand">NACHY<span>AI</span></b><div><a href="#features">Features</a><a href="#pricing">Pricing</a><Link className="button small" href="/dashboard">Dashboard</Link></div></nav>
  <section className="hero"><p className="eyebrow">PROFESSIONAL AI VIDEO CREATION</p><h1>Turn your ideas<br/>into <em>reality.</em></h1>
   <p className="lead">Create high-quality AI videos for ads, Reels, Shorts and campaigns. No complicated editing tools—just your idea, brought to life.</p>
   <Link className="button" href="/dashboard/create">Create a Video →</Link>
  </section>
  <section id="features" className="features"><article>⚡<b>Fast Generation</b><span>Turn ideas into videos in minutes.</span></article><article>▣<b>Professional Quality</b><span>Built for creators, brands and businesses.</span></article><article>✦<b>Multiple Styles</b><span>Cinematic, UGC, clean, luxury and more.</span></article></section>
  <section id="pricing" className="pricing"><div className="pricingIntro"><p className="eyebrow">SIMPLE. AFFORDABLE. POWERFUL.</p><h2>Create amazing videos<br/><em>without the high cost.</em></h2><p>Pay per video. No subscription required.</p></div><article><h3>Basic</h3><strong>$5</strong><span> per video</span><p>Great for quick social content and testing ideas.</p><Link className="button" href="/dashboard/create">Create for $5</Link></article><article className="featured"><small>MOST POPULAR</small><h3>Pro</h3><strong>$10</strong><span> per video</span><p>Premium option for creators, brands and campaigns.</p><Link className="button" href="/dashboard/create">Create for $10</Link></article></section>
  <section className="statement"><p>CREATORS. BRANDS. BUSINESSES.</p><h2>Powerful AI. <em>Real results.</em></h2></section>
 </main>
}