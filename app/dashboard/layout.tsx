import Link from "next/link";
export default function DashboardLayout({children}:{children:React.ReactNode}){
 return <div className="shell"><aside><Link href="/" className="brand">NACHY<span>AI</span></Link>
 <Link href="/dashboard">⌂ Dashboard</Link><Link className="active" href="/dashboard/create">▣ Create Video</Link>
 <Link href="/dashboard/videos">▶ My Videos</Link><div className="asideBottom">1,250 credits</div></aside>
 <div className="workspace">{children}</div></div>
}