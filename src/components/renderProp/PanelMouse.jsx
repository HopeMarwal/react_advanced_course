import MousePosition from "./MousePosition";

function PanelMouse() {

  return (
    <div>
      <p>Mouse position: </p>
      <MousePosition 
        render = {({mousePosition}) => (
          <div>
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
      
    </div>
  )
}

export default PanelMouse;
