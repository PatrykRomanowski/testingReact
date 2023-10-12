import React from "react";
import Counter from "./components/counter/counter";
import "./App.css";
import { AppProviders } from "./components/providers/AppProviders";
import { MuiMode } from "./components/mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
