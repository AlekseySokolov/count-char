import React from 'react';
import './App.css';
import InputForm from './Components/InputForm/InputForm';
import MainContent from './Components/MainContent/MainContent';

const App = () => {
  return (
      <div className='container'>
        <InputForm />
        <MainContent />
      </div>
  )
}

export default App;
