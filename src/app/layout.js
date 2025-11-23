// app/layout.js
import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopVerticalSwitcher from "./components/TopVerticalSwitcher";
import PopupForm from "./components/PopupForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  // add subsets/weights if needed
});

export const metadata = {
  title: "SkillzRevo Talent",
  description: "Perfect Match",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="b-mCQRVb4tQaUKyjLNJcvQ0pLDb6UvE7qIgmJQVOZc8"
        />

        {/* Google Tag Manager (head) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KMZTCS9K');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) - immediately after opening <body> */}
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMZTCS9K" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
          }}
        />

        {/* Optional top switcher */}
        {/* <TopVerticalSwitcher /> */}

        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Optional popup form component */}
        {/* <PopupForm /> */}
      </body>
    </html>
  );
}
