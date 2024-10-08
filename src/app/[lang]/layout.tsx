import AlertModal from "@/app/components/Toast/Toast";
import { Providers } from "@/app/core/client/store";
import { Metadata } from "next";
import "@/app/globals.css";
import { verifySession } from "@/actions";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  home,
  auth,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
  home: React.ReactNode;
}) {
  const session = await verifySession();
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <Providers>
          <Suspense fallback={<Loading/>}>{session ? home : auth}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
