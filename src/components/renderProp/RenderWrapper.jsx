import PointMouse from "./PointMouse"
import PanelMouse from "./PanelMouse"

export default function RenderWrapper() {
  return (
    <div>
      <PanelMouse />
      <PointMouse />
    </div>
  )
}
