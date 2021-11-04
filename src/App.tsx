import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import FormInputs from './components/FormInputs';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <FormInputs/>
      
    </div>
  )
}

export default App;
