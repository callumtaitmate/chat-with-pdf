import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"
import GoogleAnalytics from '@/components/GoogleAnalytics';
import CookieBanner from '@/components/CookieBanner';
import { Suspense } from "react";


export const metadata: Metadata = {
  title: "PDFtoBrainrot",
  description: "Upload PDFs to view in Brainrot format.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Suspense>
          <GoogleAnalytics GA_MEASUREMENT_ID='G-7JZYW59B79' />

          <body className="flex flex-col">
            <Toaster />
            {children}

            <CookieBanner />
            <Analytics />



          </body>
        </Suspense>

      </html>
    </ClerkProvider>
  );
}
