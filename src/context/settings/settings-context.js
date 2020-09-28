import React, { useState } from 'react';

export const SettingsContext = React.createContext();

// THIS FILE IS THE "SINGLE SOURCE OF TRUTH"
// is allows us to make these changes as needed and then trickle down to be used in other, otherwise unrelated components

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

