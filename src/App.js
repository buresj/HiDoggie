import React from 'react';
import Chat from './components/Chat'
import RefreshButton from './components/RefreshButton'

function App() {
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh'
    }}>
      <RefreshButton />
      <Chat />
    </div>
  );
}

export default App;
