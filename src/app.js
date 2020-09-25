import React from 'react';

import ToDo from './components/todo/todo.js';

// import SettingsProvider from './context/settings/settings-context.js'
// import LoginProvider from './context/auth/context.js'

function App() {

  return(
    <>
    {/* <SettingsProvider>

      <LoginProvider> */}

        
        <ToDo />

      {/* </LoginProvider>


    </SettingsProvider> */}
    </>
  )

}

export default App;

