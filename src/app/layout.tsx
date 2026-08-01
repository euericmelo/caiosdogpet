import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/config/business";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${business.name} | Banho, Tosa e Táxi Dog`,
  description: "Banho, tosa e Táxi Dog com cuidado e carinho para o seu pet. Consulte horários e faça seu agendamento pelo WhatsApp.",
  alternates: {
    canonical: "https://caiosdogpet.com.br", // TODO: Update when domain is confirmed
  },
  openGraph: {
    title: `${business.name} | Banho, Tosa e Táxi Dog`,
    description: "Banho, tosa e Táxi Dog com cuidado e carinho para o seu pet.",
    url: "https://caiosdogpet.com.br", // TODO: Update when domain is confirmed
    siteName: business.name,
    images: [
      {
        url: "/images/og/og-caios-dog-pet.webp",
        width: 1200,
        height: 630,
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2540",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
