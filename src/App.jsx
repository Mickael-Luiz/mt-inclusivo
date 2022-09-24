import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import TopBar from './components/navbar/TopBar'
import SideBar from './components/navbar/SideBar'

import './App.scss'
import ContainerConteudo from './components/container/ContainerConteudo'

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className='testeLayout'>
        <SideBar className='side' />
        <ContainerConteudo />
      </div>
    </div>
  );
}

export default App;
