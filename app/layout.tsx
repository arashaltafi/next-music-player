import type { Metadata, Viewport } from "next";
import "./globals.scss";
import 'react-toastify/dist/ReactToastify.css';
import localFont from "next/font/local";
import Script from "next/script";
import ReduxProvider from "@/libs/Provider";
import NProgressProvider from "@/provider/NProgressProvider";
import SideBar from "@/components/SideBar";
import SideBarSinger from "@/components/SideBarSinger";

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
          <NProgressProvider>
            <main className="w-full min-h-screen overflow-x-hidden bg-slate-900 border-x-[1px] border-solid border-slate-700/50 flex">
              <SideBar />
              <div className="flex-1 pb-64 w-full flex flex-col items-center justify-start bg-slate-800">
                {children}
              </div>
              <SideBarSinger />
            </main>
          </NProgressProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
