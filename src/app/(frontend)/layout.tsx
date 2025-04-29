import React from "react";
import "./styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { Analytics } from "@vercel/analytics/react";
import Acknowledgements from "./_components/acknowledgements";
import {fetchAckowledgements} from "@/utils/payloadUtils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viable Community: non-profit for a world of boundless benefits",
  description:
    "We are a non-profit organization headquartered in the European Union, passionately dedicated to the preservation and regeneration of nature since 2021. Our upcoming projects are centered on establishing community-management for both the preservation and restoration of ecosystems.",
};

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  const ackowledgements = await fetchAckowledgements()
  return (
    <html lang="en">
      <React.StrictMode>
        <body className={inter.className}>
          <div id={"header"}>
            <Header />
          </div>
          {children}
          <Analytics />
          <Acknowledgements acknowledgements={ackowledgements?.docs} />
          <div id={"footer"}>
            <Footer />
          </div>
        </body>
      </React.StrictMode>
    </html>
  );
}
