import React from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Spinner from './components/Spinner';
import BackToTop from './components/BackToTop';
import Body from './components/Body';


function App() {
  return (
    <div className="container-xxl bg-white p-0">
      <Spinner />
      <Navbar />
      <Search />
      <Body/>
      <BackToTop />
    </div>
  );
}

export default App;
