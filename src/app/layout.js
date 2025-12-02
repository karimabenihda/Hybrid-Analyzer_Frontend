import "./globals.css";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ 
  // weight: ["300", "600"],
   subsets: ["latin"] });


export const metadata = {
  title: "Hybrid-Analyzer",
  description: "Hybrid-Analyzer est une application fullstack conçue pour automatiser l’analyse d’articles de veille grace à l’orchestration de deux services d’IA complementaires",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
