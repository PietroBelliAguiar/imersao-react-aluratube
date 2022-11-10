import React, { createContext, useState } from 'react'

export const ColorModeContext = createContext({
  mode: "",
  setMode: () => { alert("Configura o tema, cabaço!") },
  toggleMode: () => { alert("Configura o toggle, cabaço!") }
})


export default function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode)

  function toggleMode() {
    if (mode === "dark") setMode("light")
    if (mode === "light") setMode("dark")
  }
  return (
    <ColorModeContext.Provider value={{ mode: mode, setMode: setMode, toggleMode: toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  )
}
