import React from 'react'
import Link from 'next/link'
import "./styles.css"
import Header from '../components/header'
import Image from "next/image";

const about = () => {
  return (
    <div>
      <Header />
      <div style={{display: "flex", justifyContent: "center", 
        alignItems: "center", minHeight: "calc(100vh - 80px)", flexDirection:"column"
        , gap: "3rem", margin: "2rem"}}>

        <div
          style={{backgroundColor: "#cfc2a7", height: "50vh", border: "1px solid black", 
          display: "flex", flexDirection: "row", 
          justifyContent: "center", alignItems: "center", 
          width: "50vw", fontSize: "1.3rem", 
          color: "#523620", margin: "0 auto", gap: "3rem"}}>
          {/* margin auto centers the div */}
          
          <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <h1 style={{color: '#311e10',fontFamily: "Garamond"}}>about me</h1>

            <p style={{color: "#523620", fontFamily: "Garamond", fontSize: "1.1rem"}}>
            hello! i'm jacy, a freshman at uic. <br></br>
            i'm currently studying data science, with a <br></br>
            concentration in bioinformatics.   
            </p>

          </div>
          <img src='/profile.jpg'
          style={{width: "20%", height: "60%", objectFit: "cover", objectPosition: "center"}}></img>
          </div>
          
          <div className="flex-col gap-4 justify-center items-center"
          style={{backgroundColor: "#cfc2a7", border: "1px solid black", 
          display: "flex", flexDirection: "row", alignItems: "center", 
          width: "50vw", fontSize: "1.3rem", margin: "0 auto", padding:"2rem"}}> 
          
            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>

              <h1 style={{color: '#311e10',fontFamily: "Garamond"}}>my experience</h1>

              <p style={{color: "#523620", fontFamily: "Garamond", fontSize: "1.1rem"
                , gap: "2rem"
              }}>
              I have experience with the following languages: <br></br>
              Java, JS, Python <br></br> As well as the following tools: <br></br>
              LaTex, VSCode, IntelliJ
              </p>

              <p style={{color: '#523620',fontFamily: "Garamond", fontSize: "1.1rem"}}>
                Here's a list of some of the things I've been involved in as well: <br></br>
                Women In Computer Science Dev Project (2026): <br></br>
                Developed a personal website portfolio amongst like minded peers, utilizing Git, JavaScript, and Figma
                <br></br>Women In Computer Science Mentee  (2025): <br></br>
                Worked with an experienced mentor in order to gain insight into internships and professional development
                <br></br>Collaborated with other peers to find connections and networking events
                <br></br>Numbers in Color Research (2025)
                <br></br>Contributed to an extensive Data Science research project  run by a WICS mentor on AIDS casualties 

              </p>

            </div>
          
          </div>

          <div className="flex-col gap-4 justify-center items-center"
          style={{backgroundColor: "#cfc2a7", border: "1px solid black", 
          display: "flex", flexDirection: "row", alignItems: "center", 
          width: "50vw", fontSize: "1.3rem", margin: "1rem", padding:"2rem"}}> 
          
            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>

              <h1 style={{color: '#311e10',fontFamily: "Garamond"}}>CONTACT ME:</h1>

              <a href="linkedin.com/in/jacy-fu-1a6975334/"><p 
              className = "transition hover:scale-120"
              style={{color: '#523620',fontFamily: "Garamond", fontSize: "1.1rem"}}>
              Linked-In
              </p></a>

              <a href="mailto:jfu38@uic.edu"><p 
              className = "transition hover:scale-120"
              style={{color: '#523620',fontFamily: "Garamond", fontSize: "1.1rem"}}>
              Email Me
              </p></a>

            </div>
          
          </div>

      </div>
    </div>

    
    
  )
}

export default about