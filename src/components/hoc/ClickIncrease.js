import React from 'react'
import withCounter from './withCounter';

function ClickIncrease(props) {

  const { counter, increment } = props

  return (
    <div>
      <button onClick={() => increment()}>
        Increase with click
      </button>
      <p>Value of counter: {counter}</p>
    </div>
  );
}

export default withCounter(ClickIncrease, 2)
