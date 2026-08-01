import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { business } from "@/config/business";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const description =
  "Banho, tosa e Táxi Dog com cuidado e carinho para o seu pet. Consulte horários e faça seu agendamento pelo WhatsApp.";

export const metadata: Metadata = {
  // Sem metadataBase o Next resolve a imagem de OG contra localhost e o preview
  // quebra no WhatsApp, que é o canal principal de agendamento.
  metadataBase: new URL(business.siteUrl),
  title: `${business.name} | Banho, Tosa e Táxi Dog`,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${business.name} | Banho, Tosa e Táxi Dog`,
    description: "Banho, tosa e Táxi Dog com cuidado e carinho para o seu pet.",
    url: business.siteUrl,
    siteName: business.name,
    images: [
      {
        url: "/images/og/og-caios-dog-pet.jpg",
        width: 1200,
        height: 630,
        alt: `${business.name} — banho, tosa e Táxi Dog`,
      }
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Banho, Tosa e Táxi Dog`,
    description: "Banho, tosa e Táxi Dog com cuidado e carinho para o seu pet.",
    images: ["/images/og/og-caios-dog-pet.jpg"],
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
        <StructuredData />
      </body>
    </html>
  );
}
