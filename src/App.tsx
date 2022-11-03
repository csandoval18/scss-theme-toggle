import { useContext, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div className={"App " + theme}>
      <div className="background flex">
        <Navbar />
        <Home />

        <button className="btn btn-primary" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>change theme</button>
      </div>
    </div>
  )
}

export default App
