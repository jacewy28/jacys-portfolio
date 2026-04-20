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
          description='Spin-off of the popular Wordle game. In Nerdle, you must solve for an equation instead.
          This Nerdle app can store various users and their scores, and show previous records and averages. 
          Built in Java and JavaFx, as well as Scenebuilder for any HTML and CSS.
          This particular project was made during highschool.'
        />

        <ProjectCard
          src="/updatedVideo.mp4"
          title="Battle Game"
          description="A simple turn-based battle game in Java where you'd select a class and battle various enemies.
          The user could select a place on a map in order to travel there and exchange money for upgrades.
          There were different enemies you could battle, and as you battled you could see your inventory/actions,
          the progress of the battle, and other information."
        />

      </div>
    </div>
  )
}

export default projects