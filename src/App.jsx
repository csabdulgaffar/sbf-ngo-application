import { BrowserRouter, Routes, Route, } from "react-router-dom"

import Home from "./pages/Home"
import AboutUs from "./pages/About"
import Learn from "./pages/Learn"

import Layout from "./component/Layout"
export default function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:id" element={<Learn />} />
        </Route>

      </Routes>
    </BrowserRouter>

  )
}