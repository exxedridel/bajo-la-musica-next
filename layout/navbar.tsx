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
    <header>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <div className="container">
            <AccordionTrigger>BAJO LA MUSICA</AccordionTrigger>
            <AccordionContent>
              <nav className="flex flex-col">
                <ul>
                  {rutas?.map((ruta: any, i: number) => (
                    <li key={i}>
                      <Link href={ruta.url}>{ruta.tag}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </AccordionContent>
          </div>
        </AccordionItem>
        <div className="gradient-colors"></div>
      </Accordion>
    </header>
  );
};

export default Navbar;
