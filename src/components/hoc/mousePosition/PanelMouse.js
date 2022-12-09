import withMousePosition from "./withMousePosition";

function PanelMouse({ mousePosition }) {
  if(!mousePosition) {
    return null;
  }

  return (
    <div>
      <p>Mouse position: </p>
      <div>
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  )
}

export default withMousePosition(PanelMouse)
