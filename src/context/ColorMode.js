import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = React.useState(props.initialMode);
  const toggleMode = () => {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  };

  return (
    <ColorModeContext.Provider value={{ mode , toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
