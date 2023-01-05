import './App.css';
import React from 'react';
import CardList from './cardlist/cardlist.component';
import FormPart from './form/form.component';
import ErrorBoundry from './error/errorboundary.component';
import { useState } from 'react';


function App() {
  const [dataState, updateState] = useState([])
// console.log(dataState);
  const newProfileInfo = (newProfile) => {
    console.log(newProfile);
    updateState(dataState=>
      [...dataState, newProfile]
    )
    console.log(typeof(newProfile));
  }
  // console.log('inside updater:', newProfile)
  return (
    <>
      <ErrorBoundry>
        <FormPart presSubmit={newProfileInfo} />
        <CardList profile={dataState} />
      </ErrorBoundry>
    </>
  )
}
export default App;
