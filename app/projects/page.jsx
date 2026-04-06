import React from 'react'
import Header from '../components/header'
import ProjectCard from '../components/ProjectCard'

const projects = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center"
        style={{ padding: "2rem", minHeight: "calc(100vh - 80px)" }}>

        <ProjectCard
          src="/Recording 2024-10-17 184629.mp4"
          title='"Nerdle"'
          description='Spin-off of the popular Wordle game. In Nerdle, you must solve for an equation.'
        />

        <ProjectCard
          src="/Recording 2024-11-16 180649.mp4"
          title="Battle Game"
          description="A simple turn-based battle game in Java where you'd select a class and battle various enemies."
        />

      </div>
    </div>
  )
}

export default projects