import "./globals.css";
export const metadata = { title: "NachyAI", description: "Turn an idea into a video." };
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}