import "./globals.css";
export const metadata = { title: "NachyAI — Here for you", description: "An AI life assistant for advice, planning, problem solving, writing, learning, and everyday life." };
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}