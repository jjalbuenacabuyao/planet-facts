import Header from "./components/Header";
import "./globals.css";

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
        className={`font-spartan w-full overflow-x-hidden bg-background bg-star text-white`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
