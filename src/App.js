import React, { useState, useEffect } from 'react';
import CardEditor from './components/CardEditor';
import CardViewer from './components/CardViewer';

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  const[listOfCards, setListOfCards] = useState([]);

  useEffect(()=>{
    if((localStorage.getItem('listOfCards')!== null)&&(localStorage.getItem('listOfCards')!== "")){
      setListOfCards(JSON.parse(localStorage.getItem('listOfCards')));
    }
  }, []);

  useEffect(() =>{
    if(listOfCards.length>0){
    localStorage.setItem('listOfCards',JSON.stringify(listOfCards));
    }
  },[listOfCards])

 
 
  return (
    <>
  
     <BrowserRouter>
     <Routes>
    <Route path="/" element={<Home />} />
        <Route index element={<CardEditor listOfCards={listOfCards} setListOfCards={setListOfCards}/>}/>
        <Route path="cardviewer" element={<CardViewer setListOfCards={setListOfCards}listOfCards={listOfCards} />} />
    </Routes >
</BrowserRouter>
</>
  );
}

export default App;
