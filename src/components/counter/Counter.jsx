import React, {useState} from 'react'

export default function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount)

  return (
    <div>
      <h1 data-testid='count'>{count}</h1>
      <button onClick={() => {setCount((prev) => prev +1)}}>Increment by 1</button>
    </div>
  )
}
