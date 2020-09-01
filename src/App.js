import React from 'react';
import logo from './logo.svg';
import './App.css';
import routers from './routes';
// import Goal from './components/Goal/Goal';


function App() {
  return (
    <div className="App">
      {/* <Goal/> */}
      {routers}
    </div>
  );
}

export default App;
