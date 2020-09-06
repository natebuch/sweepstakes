import React, {useState} from 'react';
import moment from 'moment' 

export const AgeVerification = props => {
  const [dob, setDob] = useState({entry: null, age: null, validDob: false, validatedAge: false}) 
  const { handlePageChange } = props 

  const handleDob = (e) => {
    let dobEntry = e.target.value
    if (dobEntry.length === 2 || dobEntry.length === 5) {
      dobEntry = dobEntry.concat('/')
    }
    dob.entry = dobEntry
    let date = moment(dob.entry, 'MM/DD/YYYY')
    let years = moment().diff(date, 'years', false);
    let valid_dob = moment(date._i, 'MM/DD/YYYY', true).isValid()
    console.log(dobEntry, valid_dob, years >= 21)
    setDob({
      entry: dobEntry,
      validDob: valid_dob,
      validatedAge: years >= 21,
      age: years
    })
  }

  const handleKeyDownDobInput = (e) => {
    if (e.keyCode === 8) {
      setDob({dob: ""})
    }
  }

  return (
    <div>
      <h1>Age Checker</h1>
      <input 
        type="tel" 
        value={dob.entry || ""} 
        maxLength="10"
        placeholder="mm/dd/yyyy" 
        name = "age" 
        onChange={handleDob}
        onKeyDown={handleKeyDownDobInput}  
      />
      { 
        dob.validDob && dob.validatedAge ? 
        <button onClick={(e) => handlePageChange("age",dob.age)}>click</button> : 
        <button disabled>click</button>
      }
    </div>
  )
} 