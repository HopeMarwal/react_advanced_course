//context
import { useTheme } from "../context/ThemeContext";
//components
import Header from './theme/Header';
import Page from "./theme/Page";

export default function Theme() {
  //context state
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      <Header />
      <Page />
    </div>
  );
}
