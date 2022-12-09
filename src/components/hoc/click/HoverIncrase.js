import React from 'react'
import withCounter from './withCounter';

function HoverIncrase(props) {
  const { counter, increment } = props
  
  return (
    <div>
      <button onMouseOver={() => increment()}>
        Increase on hover
      </button>
      <p>Value of counter: {counter}</p>
    </div>
  );
}

export default withCounter(HoverIncrase, 5)
