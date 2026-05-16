import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub PR Cost Calculator",
  description: "Calculate developer time cost per pull request. Track PR review time, iterations, and actual cost per feature or bugfix."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="236f537d-8476-4b4a-8d61-f4361643a0ca"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
