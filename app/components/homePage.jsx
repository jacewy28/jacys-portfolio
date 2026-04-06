import React from 'react';
import "./styles.css";

export default function homePage() {
  return (
    <div className="flex flex-col gap-4" 
    style = {{backgroundColor: "black", height: "100vh", 
    display: "flex", flexDirection: "column", justifyContent: "center", 
    alignItems: "center", width: "40%", fontSize: "1.3rem", 
    color: "white", fontFamily: "BlackTakora"}}>
      <h1 className="text-6xl">JACY FU</h1>
      <a href="/projects" className="p-4 mt-4 inline-block text-black-500 hover:underline">
        projects 
      </a>
      <a href="/contact" className="p-4 mt-4 inline-block text-black-500 hover:underline">
        contact 
        </a>
        <a href="/about" className="p-4 mt-4 inline-block text-black-500 hover:underline">
        about 
        </a>
    </div>
  );
}