import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider(props) {

  // when you get to stretch goals, make sure to grab the setters and export those also (setMaxVisible and setShowCompleted)
  const [maxVisible] = useState(3);
  const [showCompleted] = useState(true);


  return (
    <SettingsContext.Provider value={{ maxVisible, showCompleted }}>
      {props.children}
    </SettingsContext.Provider>
  );

}

export default SettingsProvider;

