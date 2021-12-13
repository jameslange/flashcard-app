import React, { useReducer, useEffect } from 'react';
import CardEditor from './components/CardEditor';
import CardViewer from './components/CardViewer';

import './App.css';
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';

import {
  initialState,
  reducer
} from './components/Reducer';


function App() {
  // const[listOfCards, setListOfCards] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState)



 const listOfCards= state.listOfCards;


  useEffect(()=>{
   dispatch({
     type:'card-storage'
   })
}, []);

  useEffect(() =>{
    
    localStorage.setItem('listOfCards',JSON.stringify(listOfCards));
    
},[listOfCards])
 
  return (
    <>
  
     <HashRouter>
     <Routes>
     <Route path="/" element={<CardEditor state={state} dispatch={dispatch}/>}/>
    {/* <Route path="/" element={<Home />} /> */}
        
        <Route path="cardviewer" element={<CardViewer listOfCards={listOfCards} dispatch={dispatch} />} />
    </Routes >
</HashRouter>
</>
  );
}

export default App;
