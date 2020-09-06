import React, {
  useContext
} from 'react'
import { ThemeContext } from '../Contexts/ThemeProvider'

export const EndemicDefault = () => {
  const theme = useContext(ThemeContext)
  const colorStyle = {color: theme.color }
  
  return (
    <div>
    {console.log(theme)}
      <h1 style={colorStyle}>
        Not Found
      </h1>
    </div>
  )
}