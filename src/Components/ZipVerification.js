import React, {useState} from 'react';
 
 export const ZipVerification = props => {
  const [entryZip, setEntryZip] = useState({zip: ''})
  const {handlePageChange} = props
 
  const handleZip = (e) => {
    const value = e.target.value
    setEntryZip({
      ...entryZip,
      zip: value
    })
  }

  return (
    <div>
      {console.log(entryZip)}
      <h1>Zip Entry</h1>
      <input type="tel" placeholder="12345" name="zipEntry" onChange={handleZip}/>
      {
        entryZip.zip.length > 4 ? 
        <button onClick={(e) => handlePageChange("zip",entryZip.zip)}>click</button> : 
        <button disabled>click</button>
      }
    </div>
  )
} 