import React from 'react';

import './Layout/Layout.scss';

import Header from './Layout/Header';
import Section from './Layout/Section';
import Aside from './Layout/Aside';
import Footer from './Layout/Footer';

function App() {

  return (
    <div className="wrap">
      <Header />
      <div className="content">
        <Section />
        <Aside />
      </div>
      <Footer />
    </div>
  );
}

export default App;
