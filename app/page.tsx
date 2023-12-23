"use client";

import { useAppContext, AppContextType } from "@/context/AppContext";
import Carousel from "@/components/Carousel";

const images: any = [
  {
    id: 4,
    imageUrl:
      "https://images.pexels.com/photos/12046457/pexels-photo-12046457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    imageUrl:
      "https://images.pexels.com/photos/10735630/pexels-photo-10735630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1496024840928-4c417adf211d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 1,
    imageUrl:
      "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default function Home() {
  const { areas, setAreas }: AppContextType = useAppContext();

  return (
    <>
      <Carousel images={images} />
      <main></main>
    </>
  );
}
