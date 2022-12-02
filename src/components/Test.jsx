import React, {useRef} from 'react'

export default function Test() {
  const inputRef = useRef(null)
  const handleClick = () => {
    console.log(inputRef)
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}> Click </button> 
    </div>
  )
}
