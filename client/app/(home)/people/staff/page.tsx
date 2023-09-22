'use client'
import React from 'react'
import Banner from '@/components/AcademicPage/Banner';
import Image from "next/image"; 

import { SidebarProps } from "@/types/sidebar";
import Sidebar1 from "@/components/Sidebar1";

type Props = {}

export default function Staff({ }: Props) {
  const sidebarItem: SidebarProps[] = [
    {
      content: "PEOPLE",
      type: "header",
      href: "/people/staff",
    },
    {
      content: "Lecturers",
      href: "/people/lecturer",
      type: "singleItem",
    },
    {
      content: "Staff",
      href: "/people/staff",
      type: "singleItem",
    },
  ];
  return (
    <>
      <Banner
        imageSrc="/all_page_banner.png" // Adjust the image path for this page
        altText="Image Alt Text"
        title="PEOPLE"
        subtitle="STAFF"
        customStyles={{
          width: '200px',  // Custom width for this page
          height: '100px',  // Custom height for this page
          bottom: '-15px', // Custom bottom attribute for this page
        }}
      />
      <div className="flex flex-col md:flex-row  mx-auto w-full max-w-screen-xl px-[1rem]  gap-[3rem]">
        <div className="w-full md:w-2/3 order-last md:order-first ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-20pc"></div>
          </div>

          <div className="p-1 pt-3 ">
            <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl m-10 ">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    src={"/personal/staffs/p30.JPG"}
                    width="0"
                    height="0"
                    sizes="100vm"
                    alt=""
                    className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                  />
                </div>
                <div className=" pl-8 pr-8 pt-1 md:text-left sm:text-center">
                  <p className="block mt-1 text-xl leading-tight font-semibold text-slate-700 ">
                    นางอริษา ทาทอง </p>
                  <p className="block mt-1 text-xl leading-tight font-semibold text-slate-700 pb-3">
                    พนักงานปฏิบัติงาน </p>
                  <ul className='list-none text-slate-600 mt-3 mb-4 text-base font-normal'>
                    <li>Tel: 053-943412 ต่อ 101 </li>
                    <li>Email: arisa.t@cmu.ac.th </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto  overflow-hidden md:max-w-2xl m-10 ">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <Image
                    src={"/personal/staffs/p31.JPG"}
                    width="0"
                    height="0"
                    sizes="100vm"
                    alt=""
                    className="w-48 h-full object-cover  md:flex justify-center ml-auto mr-auto"
                  />
                </div>
                <div className=" pl-8 pr-8 pt-1 md:text-left sm:text-center">
                  <p className="block mt-1 text-xl leading-tight font-semibold text-slate-700 ">
                    นางสาวณัฐศิธธาอัญญ์ ฟูตระกูล  </p>
                  <p className="block mt-1 text-xl leading-tight font-semibold text-slate-700 pb-3">
                    พนักงานปฏิบัติงาน </p>
                  <ul className='list-none text-slate-600 mt-3 mb-4 text-base font-normal'>
                    <li>Tel: 053-943412 ต่อ 105  </li>
                    <li>Email: noo_noinnaja@hotmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="w-full md:w-1/3 order-first md:order-last ">
          <div className="flex flex-col space-y-2 mt-20">
            <div className="px-8 py-0.5 bg-black w-full"></div>
            <Sidebar1 sidebarItem={sidebarItem}></Sidebar1>
          </div>
        </div>
      </div>
    </>
  )
}