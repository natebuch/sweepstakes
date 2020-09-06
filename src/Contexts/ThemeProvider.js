import React, {
  Fragment,
  createContext,
  useState
} from 'react'
import {
  tenants
} from '../Themes/GlobalStyles.js'

export const ThemeContext = createContext()

export const ThemeProvider = props => {
  const [theme] = useState(
    tenants[window.location.hostname.split('.')[0].toLowerCase()] ? 
    tenants[window.location.hostname.split('.')[0].toLowerCase()] : 'endemicDefault'
  )
  
  return (
    <Fragment>
      <ThemeContext.Provider value={{...theme}}>
        { props.children}
      </ThemeContext.Provider>
    </Fragment>
  )
}