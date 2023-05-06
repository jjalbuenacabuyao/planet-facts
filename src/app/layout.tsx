import Header from "./components/Header";
import "./globals.css";
import { League_Spartan } from "next/font/google";

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Planet Facts",
  description: "Frontend Mentor | Planet Facts Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spartan.className} w-full overflow-x-hidden bg-background bg-star text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
