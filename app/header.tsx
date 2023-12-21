"use client"

import { useEffect, useState } from "react";
import Link from "next/link";

const heroData = [
  {
    id: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1578946956088-940c3b502864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjY0MDQ5NzM&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 11,
    imageUrl:
      "https://images.unsplash.com/photo-1546708770-589dab7b22c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1412&q=80",
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1600119692901-94e8b7d2eacd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/flagged/photo-1558905911-5a2ab1b3b361?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80",
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1603815878781-536e057a3e7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1501962679900-bea61483313b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
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

const Header = () => {
  const [heroImage, setHeroImage] = useState("");

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * heroData.length);
    setHeroImage(heroData[randomNumber].imageUrl);
  }, []);

  return (
    <div className="hero-container">
      <img src={`${heroImage}`} alt="Hero image" />
      <div className="overlap-text">
        <p>
          AHORA ESTÁS <br /> ¡<b>BAJO LA MÚSICA</b> <br /> DE GUANAJUATO!
        </p>
      </div>
      <button className="btn-hero">
        <Link href="/acerca">Conoce más</Link>
      </button>
    </div>
  );
};

export default Header;
