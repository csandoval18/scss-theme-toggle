import React, { createContext, useState } from 'react'

export const ThemeContext = createContext<any>({ theme: 'dark', undefined })

export const ThemeProvider: React.FC<any> = ({ children }) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext