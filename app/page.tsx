"use client";

import { useAppContext, AppContextType } from "@/context/AppContext";
import Header from "./header";

export default function Home() {
  const { areas, setAreas }: AppContextType = useAppContext();

  return (
    <>
      <Header />
      <main>
        
      </main>
    </>
  );
}
