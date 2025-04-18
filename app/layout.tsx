import Player from "@/components/Player";
import Sidebar from "@/components/Sidebar";

import getSongsByUserId from "@/actions/getSongsByUserId";
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";

import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";

import "./globals.css";
import { Roboto } from "next/font/google";

const font = Roboto({ weight: '400', subsets: ["latin"] });

export const metadata = {
  title: "Spotify (Fraud Detection)",
  description: "A Fraud Detection Streaming Platform"
};

export const revalidate = 0;

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsByUserId();
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
