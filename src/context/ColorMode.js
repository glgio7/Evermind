import React from "react";

export const ColorModeContext = React.createContext({
  mode: "",
  toggleMode: () => {/* */},
});

export default function ColorModeProvider(props) {
  const [mode, toggleMode] = React.useState(props.initialMode);
  return (
    <ColorModeContext.Provider value={{ mode: mode, toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
