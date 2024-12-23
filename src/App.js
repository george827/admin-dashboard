import { colorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}> 
      <CssBaseline />
      <div className="app my-app">
        <main className="content">
          <TopBar />

        </main>
      </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
