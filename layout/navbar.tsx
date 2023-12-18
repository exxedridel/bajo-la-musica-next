"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/layout/accordionNav";

import rutas from "./routes";

const Navbar = () => {
  return (
    // <nav className="fixed w-full top-0 z-50 bg-primary text-white">
    <nav className="bg-primary text-white">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <div className="container py-2 px-5">
            <AccordionTrigger>BAJO LA MUSICA</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col">
                <ul>
                  {rutas?.map((ruta: any, i:number) => (
                    <li key={i}>
                      <Link href={ruta.url}>{ruta.tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        <div className="border-b"></div>
      </Accordion>
    </nav>
  );
};

export default Navbar;
