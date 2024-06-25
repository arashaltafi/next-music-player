import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fa" dir="rtl" className="scroll-smooth">
      <Head>
        <meta name="darkreader-lock" />
        <meta name="HandheldFriendly" content="true" />
        <link rel="icon" href="/images/logo.png" />
        <meta charSet="utf-8" />
        <meta name="google" content="notranslate" />
        <meta name="keywords" content="موزیک، موزیک آنلاین" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
