import React from 'react';
import Dashboard from './components/Dashboard'
import Store from './Store'

function App() {
  return (
    <div>
      <Store>
        <Dashboard/>
      </Store>
    </div>
  );
}

export default App;
