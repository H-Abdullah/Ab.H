"use client";

import "./../styles/globals.css";
import { AppProvider } from "@/contexts/AppProvider";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
