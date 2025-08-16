import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
export const metadata: Metadata = {
  title: "RegenFlix - Plataforma de Aprendizado Regenerativo",
  description: "Aprenda sobre regeneração, sustentabilidade e agroecologia com especialistas. Cursos, vídeos e materiais para transformar o mundo através do conhecimento.",
  keywords: "regeneração, sustentabilidade, agroecologia, permacultura, cursos online, educação ambiental",
  authors: [{
    name: "RegenFlix"
  }],
  creator: "RegenFlix",
  publisher: "RegenFlix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL("https://regenflix.com"),
  openGraph: {
    title: "RegenFlix - Plataforma de Aprendizado Regenerativo",
    description: "Aprenda sobre regeneração, sustentabilidade e agroecologia com especialistas",
    url: "https://regenflix.com",
    siteName: "RegenFlix",
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "RegenFlix - Plataforma de Aprendizado Regenerativo",
    description: "Aprenda sobre regeneração, sustentabilidade e agroecologia com especialistas",
    creator: "@regenflix"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="pt-BR" data-oid="b1jifow">
      <body className="antialiased" data-oid="hqec2:a">
        {children}

        <Script src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js" strategy="beforeInteractive" type="module" id="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js" data-oid="7x89p63" />

      </body>
    </html>;
}