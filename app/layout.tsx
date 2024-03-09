import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import "./globals.css";
import { ToggleButton } from "@/components/shared/ToggleButton";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "NowTalk",
   description: "A  chat app for the modern web",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={space_Grotesk.className}>
            <ThemeProvider
               attribute="class"
               defaultTheme="dark"
               enableSystem
               disableTransitionOnChange
            >
               <main className="absolute bottom-7 p-2 right-5">
                  <ToggleButton />
               </main>
               {children}
            </ThemeProvider>
         </body>
      </html>
   );
}