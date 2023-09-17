"use client";
import Carousel from "@/components/Carousel";
import CardForEvents from "@/components/NewAndEventHome/CardForEvents";
import { CarouselProps } from "@/types/carousel";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function aboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}
