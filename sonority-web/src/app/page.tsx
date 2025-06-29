// app/page.tsx
import Image from "next/image"; // Import ShadCN's Lucide icon
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { HEADER_TEXT, TAGLINE_TEXT, DESCRIPTION_TEXT } from "./textContent";

export default function Home() {
  return (
    <main
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('images/landing_page_robot.png')` }}
    >
      <div className="absolute top-12 left-[50%] flex space-x-6 text-lg font-bold drop-shadow-lg">
        <a href="#login" className="text-[#1e90ff] hover:underline">LOGIN</a>
        <a href="#signin" className="text-[#1e90ff] hover:underline">SIGNUP</a>
        <a href="#pricing" className="text-[#1e90ff] hover:underline">PRICING</a>
        <a href="#services" className="text-[#1e90ff] hover:underline">SERVICES</a>
      </div>
      <div
        className="absolute top-8 left-[5%] text-5xl font-bold drop-shadow-lg"
        style={{ fontFamily: "'DM Serif Text', serif", color: "#1e90ff" }}
      >
        {HEADER_TEXT}
      </div>
      <div
        className="absolute top-60 left-[5%] p-8 rounded-lg"
        style={{
          backgroundColor: "#ECEFF6", // Light grey wrapper
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="text-4xl font-medium drop-shadow-md mb-4"
          style={{ fontFamily: "'Noto Sans', serif", color: "#000000" }}
        >
          {TAGLINE_TEXT}
        </div>
        <div
          className="text-lg font-light drop-shadow-sm mb-6"
          style={{ fontFamily: "'Noto Sans', serif", color: "#333333" }}
        >
          {DESCRIPTION_TEXT.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <Button
          variant="secondary"
          className="text-xl py-5 flex items-center justify-center"
          style={{
            background: "linear-gradient(to top, #1e90ff, #87cefa)", // Original gradient
            color: "#ffffff", // Original text color
            borderRadius: "30px", // Custom radius
            fontFamily: "'DM Serif Text', serif",
            width: "auto", // Adjust width dynamically
            padding: "0 60px", // Increased horizontal padding
          }}
        >
          <Mic
            className="w-6 h-6"
            style={{ // Original gradient
              WebkitBackgroundClip: "text",
            }}
          />
          <span>Get Started Now</span>
        </Button>
      </div>
    </main>
  );
}
