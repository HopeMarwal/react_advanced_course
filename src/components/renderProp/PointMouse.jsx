import MousePosition from "./MousePosition";

function PointMouse() {
  return (
    <MousePosition 
      render={({mousePosition}) => (
      <div>
        ({mousePosition.x}, {mousePosition.y})
      </div>
      )}
    />
    
  )
}

export default PointMouse;
