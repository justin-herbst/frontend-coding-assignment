import type { Metadata } from "next";
import { Varela_Round } from "next/font/google";
import Header from "@/components/page/Header";
import Content from "@/components/page/Content";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { SearchDrinksContextProvider } from "@/features/search";

export const metadata: Metadata = {
  title: "Barcraft",
  description: "A collection of video games",
};

const varelaRound = Varela_Round({ weight: "400" });

async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title></title>
        <meta name="description" content="Web site created..." />
      </head>
      <body className={varelaRound.className}>
        <NextIntlClientProvider messages={messages}>
          <SearchDrinksContextProvider>
            <Header />
            <Content>{children}</Content>
          </SearchDrinksContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
