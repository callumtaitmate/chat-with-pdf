import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import { Suspense } from "react";
import { FacebookPixel } from "@/components/FacebookPixel";



export const metadata: Metadata = {
  title: "ResearchXcelerator",
  description: "Upload and distill information from PDFs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <ClerkProvider dynamic>


      <html lang="en">

        <Suspense>
          <GoogleAnalytics GA_MEASUREMENT_ID='G-7JZYW59B79' />


          <body className="flex flex-col">

            <Toaster />
            {children}
            <CookieBanner />
            <Analytics />
            <FacebookPixel />

          </body>

        </Suspense>

      </html>

    </ClerkProvider>

  );
}
