import Providers from "@/context/Providers";
// import Footer from "./Footer";
import "./globals.css";
import Header from "./Header";

export const metadata = {
  title: "Uranus",
  description: "Reliable contracts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" scrollbar ">
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
