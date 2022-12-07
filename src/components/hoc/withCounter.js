import React, { useState } from 'react'

const UpdatedComponent = (OriginalComponent, increaseCount) => {

  function NewComponent(props) {
    const[counter, setCounter] = useState(10)
    const increment = () => {
      setCounter((counter) => counter + increaseCount)
    }

    return (
      <OriginalComponent 
        name="LogRocket" 
        counter={counter}
        increment={increment}
      />
    )
  }

  return NewComponent;
}

export default UpdatedComponent;