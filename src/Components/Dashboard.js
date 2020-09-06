import React, {
  useContext,
  useState
} from 'react'
import { ThemeContext } from '../Contexts/ThemeProvider'
import { AgeVerification } from './AgeVerification'
import { EmailVerification } from './EmailVerification'
import { NameVerification } from './NameVerification'
import { ZipVerification } from './ZipVerification'
import { EntryConfirmation } from './EntryConfirmation'

export const Dashboard = () => {
  const theme = useContext(ThemeContext)
  const colorStyle = {color: theme.color }
  const [displayState, setDisplayState] = useState({ page: 1, age: null, email: null, name: null, zip: null })
  
  const handlePageChange = (key,value) => {
    setDisplayState({
      ...displayState,
      page: displayState.page + 1,
      [key]: value
    })
  }
  
  const onboardState = {
    1:<AgeVerification
        handlePageChange={ handlePageChange }
      />,
    2:<EmailVerification
        handlePageChange={ handlePageChange }
      />,
    3:<NameVerification
        handlePageChange={ handlePageChange }
      />,
    4:<ZipVerification
        handlePageChange={ handlePageChange }
      />,
    5: <EntryConfirmation/>
  }


  return (
    <div>
    {console.log(displayState)}
      <h1 style={colorStyle}>
        Dashboard
      </h1>
      { onboardState[displayState.page]}
    </div>
  )
}