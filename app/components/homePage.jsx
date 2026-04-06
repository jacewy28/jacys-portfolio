"use client";
import React, { useState } from 'react';
import "./styles.css";

const links = [
  { href: "/projects", label: "projects" },
  { href: "/art", label: "art" },
  { href: "/about", label: "about" },
];

export default function homePage() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div
      className="flex flex-col gap-4 bg-cover bg-center bg-[url(https://i.pinimg.com/736x/3f/f4/f3/3ff4f3096677c8babe8bf7086076c967.jpg)]"
      style={{
        height: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center", width: "100%",
        fontSize: "1.3rem", color: "#523620", fontFamily: "BlackTakora"
      }}>
      <h1 className="text-6xl">JACY FU</h1>

      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="p-5 mt-4 inline-block transition-transform duration-300 ease-out 
        hover:scale-110 hover:-translate-y-2 hover:shadow-3xl 
        group-hover:rotate-2"
          onMouseEnter={() => setHoveredLink(link.href)}
          onMouseLeave={() => setHoveredLink(null)}
        >
          {link.label} {hoveredLink === link.href ? "★" : ""}
        </a>
      ))}

    </div>
  );
}