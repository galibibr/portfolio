"use client";

import "./app.css";
import { AboutMe } from "@/components/AboutMe";
import { Qualification } from "@/components/Qualification";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contacts } from "@/components/Contacts";

export default function Home() {
  return (
     <div
        translate="no"
        className={`text-[#2d2e32] ${true ? "overflow-hidden" : "overflow-auto"}`}>
        <AboutMe />
        <Qualification />
        <Skills />
        <Projects />
        <Contacts />
     </div>
  );
}
