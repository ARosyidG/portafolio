"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useRouter } from "next/navigation";
export default function Home() {
  const route = useRouter();
  useEffect(()=>{route.push("/About")},[]);
}
