import { useState } from 'react'
import Navbar from "./components/Navbar"

function App() {
  const [theme, setTheme] = useState('light')
  return (
    <div className={"App " + theme}>
      <div className="background flex">
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>change theme</button>
        <Navbar />

      </div>
    </div>
  )
}

export default App
