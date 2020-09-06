import React, {
  useContext
} from 'react'
import { ThemeContext } from '../Contexts/ThemeProvider'

export const Rules = () => {
  const theme = useContext(ThemeContext)
  const colorStyle = {color: theme.color }
  
  return (
    <div>
    {console.log(theme)}
      <h1 style={colorStyle}>
        Rules
      </h1>
    </div>
  )
}