import React from 'react'
import Header from './components/Header'
import Hero from './pages/Hero'
import Divider from './components/Divider'
import Services from './pages/Services'
import Section from './pages/Section'
import Review from './pages/Review'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Divider/>
      <Services/>
      <Section sectionName={"D E T A I L S "} sectionImg={"/assets/section (2).png" } sectionDesc={"Mushroom created in the laps of nature."}/>
      <Section direction={"row-reverse"}  sectionName={"D E T A I L S "} sectionImg={"/assets/section (3).png" } sectionDesc={"Does your mushroom taste bad? Try us !"} />
      <Section sectionName={"D E T A I L S "} sectionImg={"/assets/section (1).png" } sectionDesc={"Mushrooms are very beneficial for the body"}/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default App