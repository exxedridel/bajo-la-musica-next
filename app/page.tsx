"use client"

import { useAppContext, AppContextType } from "@/context/AppContext";

export default function Home() {
  const { areas, setAreas }: AppContextType = useAppContext();
  return (
    <main>
      <pre>{JSON.stringify(areas, null, 2)}</pre>
      <div className="container mt-4">Inicio</div>
    </main>
  );
}
