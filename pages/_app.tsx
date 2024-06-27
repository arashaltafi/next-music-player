import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import SideBar from "@/components/SideBar";
import SideBarSinger from "@/components/SideBarSinger";
import { useRouter } from 'next/router';
import nProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from "react";
import BackgroundColorHome from "@/components/BackgroundColorHome";
import Script from "next/script";

const iranYekan = localFont({
  src: "../public/fonts/iran-yekan/IRANYekanXVFaNumVF.woff",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      nProgress.start()
    }

    const handleRouteChangeComplete = () => {
      nProgress.done()
    }

    const handleRouteChangeError = () => {
      nProgress.done()
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeError', handleRouteChangeError)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [router])

  return (
    <>
      <Script src="/scripts/script.js" />
      <BackgroundColorHome />
      <main className={`${iranYekan.className} w-full min-h-screen overflow-x-hidden bg-slate-900 border-x-[1px] border-solid border-slate-700/50 flex`}>
        <SideBar />
        <div className="flex-1 pb-64 w-full flex flex-col items-center justify-start bg-gradient-to-b from-slate-800 to-slate-700">
          <Component {...pageProps} />
        </div>
        <SideBarSinger />
      </main>
    </>
  )
}
