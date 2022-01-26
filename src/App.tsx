import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import '../src/styles/App.css';
import TrainBox from './components/TrainBox';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <div className='App'>
      <div>
        <h1> Train Sort </h1>
      </div>
      <TrainBox />
    </div>
  );
}

export default App;
