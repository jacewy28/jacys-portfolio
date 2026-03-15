"use client";
import React, { useState } from 'react';
import "./styles.css";

export default function homePage() {
  const [hoveredProjects, setHoveredProjects] = useState(false);
  const [hoveredart, setHoveredart] = useState(false);
  const [hoveredAbout, setHoveredAbout] = useState(false);

  return (
    <div
      className="flex flex-col gap-4"
      style={{
        backgroundColor: "black", height: "100vh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center", width: "100%", fontSize: "1.3rem",
        color: "white", fontFamily: "BlackTakora"
      }}>
      <h1 className="text-6xl">JACY FU</h1>

      <a href="/projects" className="p-5 mt-4 inline-block"
        onMouseEnter={() => setHoveredProjects(true)}
        onMouseLeave={() => setHoveredProjects(false)}>
        projects {hoveredProjects ? "★" : ""}
      </a>

      <a href="/art" className="p-5 mt-4 inline-block"
        onMouseEnter={() => setHoveredart(true)}
        onMouseLeave={() => setHoveredart(false)}>
        art {hoveredart ? "★" : ""}
      </a>

      <a href="/about" className="p-5 mt-4 inline-block "
        onMouseEnter={() => setHoveredAbout(true)}
        onMouseLeave={() => setHoveredAbout(false)}>
        about {hoveredAbout ? "★" : ""}
      </a>

    </div>
  );
}