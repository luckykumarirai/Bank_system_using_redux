import React from 'react';
import Navbar from './components/navbar';
import Shop from './components/shop';

function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Shop />
    </div>
    </>
  );
}

export default App;
