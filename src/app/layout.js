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
  // subsets: ["latin"],
});

export const metadata = {
  title: "SkillzRevo Talent",
  description: "Perfect Match",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
      {/* <TopVerticalSwitcher /> */}
      <Navbar />
        <main>{children}</main>
       
        <Footer />
      </body>
    </html>
  );
}
