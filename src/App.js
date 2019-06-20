import React, { Suspense } from "react";
import "./App.css";
const Navbar = React.lazy(() => import('./Components/Navbar'))
const Bg = React.lazy(() => import ("./Components/Bg"))
const MyStory = React.lazy(() => import ("./Components/MyStory"))
const Skills = React.lazy(() => import ("./Components/Skills"))
const AboutMe = React.lazy(() => import ("./Components/AboutMe"))
const Footer = React.lazy(() => import ("./Components/Footer"))
const Project = React.lazy(() => import ("./Components/Project"))

function App() {
  return (
      <Suspense fallback={<div className="loading">Loading&#8230;</div>}>
      <Navbar />
      <Bg title="Position : Front End Developer"/>
      <AboutMe />
      <MyStory />
      <Skills />
      <Project />
      <Footer />
      </Suspense>
  );
}

export default App;
