import React from 'react'
import Link from 'next/link'
import Header from '../components/header'

const art = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Header />

      <div style={{ display: "flex", flexDirection: "column", 
        alignItems: "center", padding: "2rem" }}>

        <h1 style={{ color: '#cfc2a7', marginBottom: "0.5rem" }}>my art</h1>
        <p style={{ color: 'gray', fontFamily: "Garamond", marginBottom: "2rem" }}>
          here's a page dedicated to some of my illustrations.
        </p>

        <div style={{ border: "1px solid white", padding: "1.5rem",
          width: "50vw", display: "flex", flexDirection: "column",
          gap: "1rem", alignItems: "center" }}>
            
          <img
            src="https://f2.toyhou.se/file/f2-toyhou-se/images/110676216_qVtNxXFbcxTTA5p.png"
            style={{ width: "100%", height: "auto" }}
          />

          <img
            src='https://f2.toyhou.se/file/f2-toyhou-se/images/117440560_BAVYzmNMVPu77zj.jpg'
            style={{ width: "100%", height: "auto" }}
          />
          

        </div>

        <p style={{ color: "gray", fontFamily: "Garamond", 
          fontSize: "1.1rem", marginTop: "2rem" }}>
          places to find me:
        </p>

      </div>
    </div>
  )
}

export default art