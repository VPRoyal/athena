import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/themeProvider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })


export const metadata: Metadata = {
  title: "Athena Body Bar and Saloon - Where Beauty Meets Wellness",
  description:
    "Discover a luxury destination where relaxation, rejuvenation, and beauty come together in perfect harmony. Located in the heart of Jaipur, Athena offers premium spa and salon experiences crafted just for you.",
  keywords: "spa, salon, beauty, wellness, Jaipur, massage, facial, hair styling, body treatments",
  authors: [{ name: "Athena Body Bar and Saloon" }],
  openGraph: {
    title: "Athena Body Bar and Saloon - Where Beauty Meets Wellness",
    description: "Premium spa and salon experiences in Jaipur",
    type: "website",
    locale: "en_US",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
