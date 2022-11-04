import React from 'react';
import { Box, SvgIcon, Tabs, Tab } from '@mui/material';
import './App.css';
import { Header, Landing, Footer } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
