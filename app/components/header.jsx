// margin impacts outside your container
// padding impacts inside your container
"use client";
import Link from "next/link";
import "./styles.css";
import { useState } from 'react';
  

export default function Header() {
    const [hoveredProjects, setHoveredProjects] = useState(false);
    const [hoveredart
        , setHoveredart
        
    ] = useState(false);
    const [hoveredAbout, setHoveredAbout] = useState(false);
    const [hoveredHome, setHoveredHome] = useState(false);
    return(
        <div className="flex flex-col gap-4 justify-top items-center"
        style={{backgroundColor: "black", height: "10vh", 
        display: "flex", flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center", width: "100vw", 
        fontSize: "1.3rem", color: "white", 
        fontFamily: "BlackTakora"}}>
        <div id="navBar">
            <Link href="/">
                <button className="p-5"
                onMouseEnter={() => setHoveredHome(true)}
                onMouseLeave={() => setHoveredHome(false)}>
                home {hoveredHome ? "⚔" : ""}</button>
            </Link>
            <Link href="/projects">
                <button className="p-5"
                onMouseEnter={() => setHoveredProjects(true)}
                onMouseLeave={() => setHoveredProjects(false)}>
                projects {hoveredProjects ? "⚔" : ""}</button>
            </Link>
            <Link href="/art
            ">
                <button className="p-5"
                onMouseEnter={() => setHoveredart
                    (true)}
                onMouseLeave={() => setHoveredart
                (false)}>art
                {hoveredart
                 ? "⚔" : ""}</button>
            </Link>
            <Link href="/about">
                <button className="p-5"
                onMouseEnter={() => setHoveredAbout(true)}
                onMouseLeave={() => setHoveredAbout(false)}>about{hoveredAbout ? "⚔" : ""}</button>
            </Link>
        </div>
        </div>
        
    )
}
