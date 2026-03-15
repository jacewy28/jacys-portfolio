import React from 'react'
import Link from 'next/link'
import Header from '../components/header'

const art = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
      <Header />

      <div style={{ display: "flex", flexDirection: "column", 
        alignItems: "center", padding: "2rem" }}>

        <h1 style={{ color: '#fffa67', marginBottom: "0.5rem" }}>my art</h1>
        <p style={{ color: 'gray', fontFamily: "Garamond", marginBottom: "2rem" }}>
          here's a page dedicated to some of my illustrations.
        </p>

        <div style={{ border: "1px solid white", padding: "1.5rem",
          width: "50vw", display: "flex", flexDirection: "column",
          gap: "1rem", alignItems: "center" }}>
            
          <img
            src="https://images2.imgbox.com/cb/fd/sHiT8oUN_o.png"
            style={{ width: "100%", height: "auto" }}
          />

          <img
            src='https://images2.imgbox.com/08/97/ysYw4ULj_o.png'
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