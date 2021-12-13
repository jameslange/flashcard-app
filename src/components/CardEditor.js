import { findByLabelText } from '@testing-library/react';
import React, {useState} from 'react';
import CardTable from './CardTable';
import NewCard from './NewCard';
import '../App.css';
import { Link} from 'react-router-dom';
import EditCard from './EditCard';


const editorStyle={
    display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center',
  paddingBottom:'2rem',
  borderBottom:'2px solid black',
  marginBottom:'2rem',
  
  
}

const CardEditor = ({state, dispatch}) => {

// const [cardFront, setCardFront ] = useState("");
// const [cardBack, setCardBack ] = useState("");

// const [cardToEdit, setCardToEdit] = useState("");
// const [newCard, changeToEdit] = useState(true);



const mainStyle={
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center',
  display: 'flex',
  
}

// const newCard = state.newCard;

  return(   
    <main style={mainStyle}  >
        <section  className="editorStyle" style={editorStyle} >
            <h1>Card Editor</h1>
            
             {state.listOfCards.length===0 ?
            
            <></>: 

            <CardTable 
            state={state}
            dispatch={dispatch}
             />
             }
            
           {state.newCard ? 
            <NewCard 
            state={state}
            dispatch={dispatch}
           
            />:
             <EditCard 
             state={state}
             dispatch={dispatch}
               />
           }
        </section>
        <Link to='/cardviewer'><button >Go to Viewer</button></Link> 
     </main>
  )
}


export default CardEditor;