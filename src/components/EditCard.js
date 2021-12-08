import React from 'react';
import '../App.css';

const EditCard = (props) => {
     
    const editCard = () => {
        const card = props.listOfCards[props.cardToEdit];
        const temp = [...props.listOfCards];
       

        card.front = props.cardFront;
        card.back = props.cardBack;
       
        temp[props.cardToEdit]=card;
        props.setListOfCards([...temp]);
        props.changeToAdd(true);
        props.setCardFront('');
        props.setCardBack(''); 

    }
   
   return( <div className="inputDiv">
        <div>
            <input value={props.cardFront} onChange={(e)=>props.setCardFront(e.target.value)} placeholder='Edit Front of Card'></input>
            <input value={props.cardBack} onChange={(e)=>props.setCardBack(e.target.value)} placeholder='Edit Back of Card'></input>
        </div>
        <div className='buttonDiv'>
            <button onClick={editCard}>Edit Card</button>
        </div>
    </div>
    )
}


export default EditCard
