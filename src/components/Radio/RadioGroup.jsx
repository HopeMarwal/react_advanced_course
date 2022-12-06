import React, { cloneElement } from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  React.Children.map(children, (item) => {
    return cloneElement(item, {
      onChange,
      checked: item.props.value === selected
    })

  })
  // and pass the correct props to each RadioOption
  const RadioOptions = null;

  return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return (
    <div className="RadioOption">
      <input 
        id={value} 
        type="radio" 
        name={value} 
        value={value}
        checked={checked}
        onChange={(e) => {
          onChange(e.target.value)
        }}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
