import React from 'react';
import Main from './components/Main';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar'

function App() {
  return (
    <div className = "background">
    <Toolbar/>
    <Main/>
    </div>
    
  );
}

export default App;
