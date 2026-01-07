import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Header, Footer, WhatsAppButton } from "@/components/layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Wonderland Group | The Full Circle of Goodness",
  description:
    "Kenya's first fully integrated agricultural ecosystem. From our soil to your spoon. Premium feeds, modern farms, fresh dairy products, and agricultural training.",
  keywords: [
    "Wonderland Group",
    "dairy products Kenya",
    "animal feeds Kenya",
    "farm fresh milk",
    "agricultural training",
    "dairy farming",
  ],
  openGraph: {
    title: "Wonderland Group | The Full Circle of Goodness",
    description:
      "Kenya's first fully integrated agricultural ecosystem. From our soil to your spoon.",
    type: "website",
    locale: "en_KE",
    siteName: "Wonderland Group",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
