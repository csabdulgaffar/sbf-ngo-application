import { BrowserRouter, Routes, Route, } from "react-router-dom"

import Home from "./pages/Home"
import AboutUs from "./pages/About"
import Learn from "./pages/Learn"
import LearnHouse from "./pages/LearnHouse"
import LearnNeighbour from "./pages/LearnNeighbour"
import LearnNutrition from "./pages/LearnNutrition"


import Layout from "./component/Layout"
import LearnBioOne from "./pages/LearnBioOne"
import LearnBioTwo from "./pages/LearnBioTwo"
export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn-house" element={<LearnHouse />} />
          <Route path="/learn-neighbour" element={<LearnNeighbour />} />
          <Route path="/learn-nutrition" element={<LearnNutrition />} />
          <Route path="/learn-bio1" element={<LearnBioOne />} />
          <Route path="/learn-bio2" element={<LearnBioTwo />} />
          <Route path="/learn/:id" element={<Learn />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}