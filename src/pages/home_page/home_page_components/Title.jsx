"use client";
import { TypewriterEffectSmooth } from "./TypeWriterEffect";
export default function AnimatedTitle() {
  const words = [
    {
      text: "We ",
      className: "text-black dark:text-black"
    },
    {
      text: "Connect ",
      className: "text-black dark:text-black"
    },
    {
      text: "Talent ",
      className: "text-black dark:text-black"
    },
    {
      text: "to ",
      className: "text-black dark:text-black"
    },
    {
      text: "Opportunity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      
      <TypewriterEffectSmooth words={words} />
      
    </div>
  )
}
