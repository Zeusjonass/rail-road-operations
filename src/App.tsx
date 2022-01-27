import { Button, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "../src/styles/App.css";
import TrainBox from "./components/TrainBox";
import ReceiverBox from "./components/ReceiverBox";
import InputBox from "./components/InputBox";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div className="App">
      <div>
        <h1> Train Sort </h1>
      </div>
      <TrainBox />
      <ReceiverBox />
      <Button variant="contained" onClick={() => {
        alert('clicked');
      }}>Sort</Button>
      <InputBox />
    </div>
  );
}

export default App;
