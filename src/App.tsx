import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "../src/styles/App.css";
import InputBox from "./components/InputBox";
import Box from "./components/Box";

//import DestinationsTable from "./components/DestinationsTable";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  // const outputFun = (props) => {
  return (
    <div className="App">
      <div>
        <h1> Train Sort </h1>
      </div>
      <Box displayName="Destinations" baseUrl="http://localhost:8080/destinations" />
      <Box displayName="Receivers" baseUrl="http://localhost:8080/receivers" />
      <InputBox destinationsBaseURL="http://localhost:8080/receivers" receiversBaseURL="http://localhost:8080/receivers" />
    </div>
  );
  // };
}
export default App;
