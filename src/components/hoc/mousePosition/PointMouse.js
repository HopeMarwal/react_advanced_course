import withMousePosition from "./withMousePosition";

function PointMouse({ mousePosition }) {
  if(!mousePosition) {
    return null;
  }
  return (
    <div>
      ({mousePosition.x}, {mousePosition.y})
    </div>
  )
}

export default withMousePosition(PointMouse)
