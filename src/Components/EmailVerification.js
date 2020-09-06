import React, {useState} from 'react';
 
 export const EmailVerification = props => {
  const [emailAddress, setEmail] = useState({email: null})
  const {handlePageChange} = props
 
  const handleEmail = (e) => {
    const value = e.target.value
    setEmail({
      [e.target.name]: value
    })
  }

  const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  return (
    <div>
      <h1>EmailChecker</h1>
      <input type="email" placeholder="email@example.com" name = "email" onChange={handleEmail}/>
      {
        validateEmail(emailAddress.email) ? 
        <button onClick={(e) => handlePageChange("email",emailAddress.email)}>click</button> :
        '' 
      }
    </div>
  )
} 