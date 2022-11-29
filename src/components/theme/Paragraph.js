import { useTheme } from "../../context/ThemeContext";

export default function Paragraph({ children }) {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
}
