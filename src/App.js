import React from 'react';

import Menu from './components/Menu/Menu';
import Header from './components/Header';
import './App.css';
import routers from './routes';
// import Goal from './components/Goal/Goal';


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Menu/>  */}
      {routers}
    </div>
  );
}

export default App;
