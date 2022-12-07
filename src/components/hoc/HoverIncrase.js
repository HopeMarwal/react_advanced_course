import React from 'react'

export default function HoverIncrase() {
  const [fontSize, setFontSize] = useState(10); 
  return (
    <div>
      <button onClick={() => setFontSize((size) => size + 1)}>
        Increase with click
      </button>
      <p style={{ fontSize }}>Size of font in onClick function: {fontSize}</p>
    </div>
  );
}
