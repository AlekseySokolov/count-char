import React from 'react';
import './App.css';
import InputForm from './Components/input-form/input-form';
import List from './Components/list/list';

const App = () => {
  return (
      <div className='container'>
        <InputForm />
        <List />
      </div>
  )
}

export default App;
