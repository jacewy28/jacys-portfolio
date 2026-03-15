import React from 'react'
import Link from 'next/link'
import "./styles.css"
import Header from '../components/header'

const about = () => {
  return (
    <div>
      <Header />
      <div style={{display: "flex", justifyContent: "center", 
        alignItems: "center", minHeight: "calc(100vh - 80px)"}}>

        <div className="flex flex-row gap-4 justify-center items-center"
          style={{backgroundColor: "black", height: "50vh", border: "1px solid white", 
          display: "flex", flexDirection: "row", 
          justifyContent: "center", alignItems: "center", 
          width: "50vw", fontSize: "1.3rem", 
          color: "white", margin: "0 auto"}}>
          {/* margin auto centers the div */}
          
          <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
            <h1 style={{color: 'gray',fontFamily: "Garamond"}}>about me</h1>

            <p style={{color: "gray", fontFamily: "Garamond", fontSize: "1.1rem"}}>
            hello! i'm jacy, a sophomore at uic. <br></br>
            i'm currently studying data science, with a minor <br></br>
            in computer science. i have a love for the medieval, <br></br>
            the pre-raphaelite, and everything art.   
            
            </p>

          </div>
          <img src='https://i.pinimg.com/1200x/ae/89/af/ae89af6d8e3cda51189758bde829f6b9.jpg'
          style={{width: "20%", height: "60%", objectFit: "cover", objectPosition: "right"}}></img>
          </div>
          
      </div>
    </div>

    
    
  )
}

export default about