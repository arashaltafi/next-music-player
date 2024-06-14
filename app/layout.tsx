import type { Metadata, Viewport } from "next";
import "./globals.scss";
import 'react-toastify/dist/ReactToastify.css';
import localFont from "next/font/local";
import Script from "next/script";
import ReduxProvider from "@/libs/Provider";
import { NextUIProviders } from "@/provider/NextUIProviders";
import NProgressProvider from "@/provider/NProgressProvider";

export const metadata: Metadata = {
  title: {
    default: 'موزیک آنلاین',
    template: 'موزیک آنلاین | %s'
  },
  description: "سایت موزیک آنلاین",
  keywords: ['music online', 'musics', 'music', 'audio', 'music-online', 'موزیک آنلاین', 'سایت موزیک', 'موزیک'],
  authors: [
    {
      name: 'Arash Altafi',
    }
  ],
  icons: {
    icon: "/images/logo.png",
  },
  themeColor: '#f8f8f8',
  appleWebApp: {
    title: 'موزیک آنلاین',
    capable: true,
    statusBarStyle: 'default',
  },
  twitter: {
    title: 'موزیک آنلاین',
    description: "سایت موزیک آنلاین"
  },
  other: {
    "msapplication-TileColor": "#f8f8f8",
    "msapplication-TileImage": "/icons/logo.png",
    "theme-color": "#f8f8f8",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "سایت موزیک آنلاین",
    "google": "notranslate",
    "charset": "UTF-8"
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
}

const iranYekan = localFont({
  src: "../public/fonts/iran-yekan/IRANYekanXVFaNumVF.woff",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <head>
        <meta name="darkreader-lock" />
        <meta name="HandheldFriendly" content="true" />
      </head>
      <Script src='/scripts/script.js' />
      <body className={iranYekan.className}>
        <ReduxProvider>
          <NextUIProviders>
            <NProgressProvider>
              {children}
            </NProgressProvider>
          </NextUIProviders>
        </ReduxProvider>
      </body>
    </html>
  );
}
