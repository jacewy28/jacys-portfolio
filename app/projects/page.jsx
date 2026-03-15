import React from 'react'
import Header from '../components/header'

const projects = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center"
      style={{padding: "2rem", minHeight: "calc(100vh - 80px)"}}>



        <div style={{ display: 'flex', flexDirection: 'col', gap: '2rem',
          alignItems: 'center', marginBottom: '3rem' }}>
          
          {/* video of nerdle*/}

          <video controls 
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}>
            <source src="/Recording 2024-10-17 184629.mp4" type="video/mp4" />
          
          </video>

          <div className="flex flex-col gap-4 justify-center items-center"
          style={{backgroundColor: "black", height: "50vh", border: "1px solid white", 
          display: "flex", 
          justifyContent: "center", alignItems: "center", 
          width: "50vw", fontSize: "1.3rem", 
          color: "white", margin: "0 auto"}}>

            <h2 style={{ color: 'white', fontFamily: 'Garamond' }}>"Nerdle"</h2>

            <p style={{ color: 'gray', fontFamily: 'Garamond' }}>
              Spin-off project of the popular Wordle game. 
              <br></br> In Nerdle, however, you must solve for an equation.
            </p>

          </div>
        </div>


        <div style={{ display: 'flex', flexDirection: 'col', gap: '2rem',
          alignItems: 'center', marginBottom: '3rem' }}>

          {/* video of battle game*/}

          <video controls 
          style={{ width: '300px', height: '300px', objectFit: 'cover' }}>
            <source src="/Recording 2024-11-16 180649.mp4" type="video/mp4" />

          </video>

          <div className="flex flex-col gap-4 justify-center items-center"
          style={{backgroundColor: "black", height: "50vh", border: "1px solid white", 
          display: "flex",  
          justifyContent: "center", alignItems: "center", 
          width: "50vw", fontSize: "1.3rem", 
          color: "white", margin: "0 auto"}}>

            <h2 style={{ color: 'white', fontFamily: 'Garamond' }}>Battle Game</h2>

            <p style={{ color: 'gray', fontFamily: 'Garamond' }}>
              A simple turn-based battle game in java, <br></br> where you'd select a class and 'battle'
              <br></br> various enemies. Video is narrated.
            </p>

          </div>
        </div>

      </div>
    </div>
  )
}

export default projects