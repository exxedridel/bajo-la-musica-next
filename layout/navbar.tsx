"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/layout/accordionNav";

import rutas from "./routes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header>
      <Accordion type="single" collapsible>
        <AccordionItem value="mobile-menu">
          <div className="container">
            <AccordionTrigger>
              <Image
                src="/bajo-la-musica-logo.png"
                alt="Logo bajo la música"
                width={112}
                height={35}
              />
            </AccordionTrigger>
            <AccordionContent>
              <nav className="flex flex-row justify-between items-center">
                <ul>
                  {rutas?.map((ruta: any, i: number) => (
                    <li key={i} className="mt-2">
                      <Button variant="outline">
                        <Link href={ruta.url}>{ruta.tag}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
                <div>
                  <div>
                    <Image
                      src="/bajo-la-musica-logo.png"
                      alt="Logo bajo la música"
                      width={105}
                      height={35}
                    ></Image>
                    <Button>WhatsApp</Button>
                  </div>
                </div>
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
