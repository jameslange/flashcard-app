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

const CardEditor = (props) => {
const [cardFront, setCardFront ] = useState("");
const [cardBack, setCardBack ] = useState("");

const [cardToEdit, setCardToEdit] = useState("");
const [newCard, changeToEdit] = useState(true);



const mainStyle={
  flexDirection: "column",
  alignItems: "center",
  justifyContent: 'center',
  display: 'flex',
  
}



  return(   
    <main style={mainStyle}  >
        <section  className="editorStyle" style={editorStyle} >
            <h1>Card Editor</h1>
            
            {props.listOfCards.length===0 ?
            
            <></>:

            <CardTable 
             listOfCards={props.listOfCards}
             setListOfCards={props.setListOfCards}
             setCardToEdit={setCardToEdit}
             changeToEdit={changeToEdit}
             />
          }
            
           {newCard ? 
            <NewCard 
            cardFront={cardFront} 
            cardBack={cardBack}
            listOfCards={props.listOfCards}
            setListOfCards={props.setListOfCards}
            setCardFront={setCardFront}
            setCardBack={setCardBack}
           
            />:
             <EditCard 
             cardFront={cardFront}
             cardBack={cardBack} 
             setCardFront={setCardFront}
             setCardBack={setCardBack} 
             cardToEdit={cardToEdit}
             listOfCards={props.listOfCards}
             setListOfCards={props.setListOfCards}
             changeToAdd={changeToEdit}
               />
           }
        </section>
        <Link to='/cardviewer'><button >Go to Viewer</button></Link> 
     </main>
  )
}


export default CardEditor;