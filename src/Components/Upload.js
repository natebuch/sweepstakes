import React, {
  useContext
} from 'react'
import { ThemeContext } from '../Contexts/ThemeProvider'

export const Upload = () => {
  const theme = useContext(ThemeContext)
  const colorStyle = {color: theme.color }
  
  return (
    <div>
    {console.log(theme)}
      <h1 style={colorStyle}>
        Upload
      </h1>
    </div>
  )
}