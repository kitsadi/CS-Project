"use client";
import React from "react";
import Banner from "@/components/Banner";

import Image from "next/image";

import { sidebarItem } from '@/app/[locale]/(home)/academics/undergraduate/sidebarData'
import Sidebar1 from "@/components/Sidebar1";

type Props = {};

export default function Undergraduate({}: Props) {
  

  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="ACADEMIC"
        subtitle="UNDERGRADUATE"
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full "></div>
          </div>
          <div className="p-1 pt-3 ">
            <div className="max-w-full max-h-full justify-center">
              <Image
                src={"/undergraduate.jpeg" ?? "#"}
                width="0"
                height="0"
                sizes="100vw"
                alt="academic-image"
                className="w-auto h-auto object-scale-down  "
              />
            </div>
            <div className="p-5">
              <p>
              "The Computer Science Department at CMU offers a rigorous and practical undergraduate program focused on real-world problem solving."
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 order-first md:order-last">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full"></div>

            <Sidebar1 sidebarItem={sidebarItem}></Sidebar1>
          </div>
        </div>
      </div>
    </>
  );
}
