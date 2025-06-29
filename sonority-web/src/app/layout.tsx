// app/layout.tsx
import "./../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Sonority",
  description: "AI-powered voice-to-text assistant for clinicians",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {" "}
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wdth,wght@87.5,500&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
