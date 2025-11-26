import React, { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Entry from './components/Entry'
import articles from './data.js';


function App() {

  const entryElements = articles.map((article) => {
    return React.createElement(Entry,article)
  })


  return (
    <>
    <Header />
   {entryElements.map((newEntry) => { return newEntry})}
  
    </>
  )
}

export default App
