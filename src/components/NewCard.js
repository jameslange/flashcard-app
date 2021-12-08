import React,{useEffect} from 'react';
import '../App.css'



const NewCard = (props) => {

    const clickHandler = () =>{
        let currentCard = {
            front:props.cardFront,
            back:props.cardBack,
        }

        const currList = [...props.listOfCards];
        
        currList.push(currentCard);
        props.setListOfCards(currList);
        props.setCardFront('');
        props.setCardBack('');    
    }

    

  
    
   return( 
        <div className="inputDiv">
            <div>
                <input value={props.cardFront} onChange={(e)=>props.setCardFront(e.target.value)}placeholder='Front of Card'></input>
                <input value={props.cardBack} onChange={(e)=>props.setCardBack(e.target.value)} placeholder='Back of Card'></input>
            </div>
            <div className='buttonDiv'>
                <button onClick={clickHandler}>Add Card</button>
            </div>
        </div>
    
    )
}


 export default NewCard;