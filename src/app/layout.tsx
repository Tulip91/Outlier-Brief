import type { Metadata } from "next";
import { MotionLayer } from "@/components/motion-layer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Outlier Brief - YouTube Outlier Research for Creators",
    template: "%s | Outlier Brief",
  },
  description:
    "Find unusually successful YouTube videos in your niche and turn them into actionable content ideas.",
  keywords: [
    "YouTube research",
    "creator analytics",
    "video ideas",
    "outlier videos",
  ],
  openGraph: {
    title: "Outlier Brief - YouTube Outlier Research for Creators",
    description:
      "Find unusually successful YouTube videos in your niche and turn them into actionable content ideas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionLayer />
        {children}
      </body>
    </html>
  );
}
