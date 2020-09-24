import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {



  return (
    <SettingsContext.Provider value={state}>
      {props.children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;

