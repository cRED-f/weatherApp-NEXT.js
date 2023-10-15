import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex  h-screen">
          <div className="sidebarComp">
            <Sidebar />
          </div>
          <div className="mainComp ">{children}</div>
        </div>
      </body>
    </html>
  );
}
