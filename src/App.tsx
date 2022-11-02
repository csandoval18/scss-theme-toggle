import { useState } from 'react'
import Navbar from "./components/Navbar"

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <div className={"App " + theme}>
      <div className="background flex">
        <Navbar />

        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>change theme</button>
      </div>
    </div>
  )
}

export default App
