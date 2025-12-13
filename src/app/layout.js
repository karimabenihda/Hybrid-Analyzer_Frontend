import "./globals.css";
import { Montserrat } from "next/font/google";
import { Providers } from "./providers";

const montserrat = Montserrat({ 
  // weight: ["300", "600"],
   subsets: ["latin"] });


export const metadata = {
  title: "Hybrid-Analyzer",
  description: "Hybrid-Analyzer est une application fullstack conçue pour automatiser l’analyse d’articles de veille grace à l’orchestration de deux services d’IA complementaires",
  icons:{
    icon:"../../images/logo.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
className={`${montserrat.className} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
