import React, {useState} from 'react';
 
 export const NameVerification = props => {
  const [entryName, setEntryName] = useState({name: ''})
  const {handlePageChange} = props
 
  const handleName = (e) => {
    const value = e.target.value
    setEntryName({
      ...entryName,
      name: value
    })
  }

  return (
    <div>
      {console.log(entryName)}
      <h1>Name Entry</h1>
      <input type="text" placeholder="John Smith" name="nameEntry" onChange={handleName}/>
      {
        entryName.name.length > 0 ? 
        <button onClick={(e) => handlePageChange("name",entryName.name)}>click</button> : 
        <button disabled>click</button>
      }
    </div>
  )
} 