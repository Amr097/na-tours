"use client";
import { useEffect, useState } from "react";
import Header from "@/Sections/Header/Header";
import About from "@/Sections/About/About";
import Features from "@/Sections/Features/Features";
import Tours from "@/Sections/Tours/Tours";

export const metadata = {
  title: "NA Tours",
  description: "...",
};

export default function Home() {
  const [inView, setInView] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach((entry) => {
        const classPart = entry.target.classList[0].split("-")[0];
        entry.target.classList.toggle(
          `${classPart}-animation`,
          entry.isIntersecting
        );
      });
    });

    observer.observe(document.querySelector(".main--heading-primary"));
    observer.observe(document.querySelector(".sub--heading-primary"));
    observer.observe(document.querySelector(".btn--white"));
  }, []);
  return (
    <>
      <Header inView={inView} />
      <main>
        <About />
        <Features />
        <Tours />
      </main>
    </>
  );
}
