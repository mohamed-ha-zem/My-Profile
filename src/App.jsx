import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Skills from './pages/skills'
import Projects from './pages/Projects'
import ContactUs from './pages/ContactUs'
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

function App() {
  // const {ref , inView} = useInView({triggerOnce: true})
  return (
    <>
    <Routes>
      <Route path="/" element={
        <div>
          <Home />
          <Skills/>
          <Projects/>
          <ContactUs/>
        </div>
      } />
      <Route path="/My Profile" element={
        <div>
          <Home />
          <Skills/>
          <Projects/>
          <ContactUs/>
        </div>
      } />
      <Route path="/home" element={<Home/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/ContactUs" element={<ContactUs/>}/>
    </Routes>
    </>
  )
}

export default App
