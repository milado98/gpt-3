import React from 'react';

import { Blog, Footer, WhatGPT3, Header, Features, Possibillity } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
      <section className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibillity />
        <CTA />
        <Blog />
        <Footer />
      </section>
    </div>
  )
}

export default App
