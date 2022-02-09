import React, { Component, useState } from 'react';
import Modal from './modal';
import Home from './home';
import SideBar from './sidebar';

function App() {
  return (
    <React.Fragment>
      <Home />
      <Modal />
      <SideBar />
    </React.Fragment>
  )
}

export default App;