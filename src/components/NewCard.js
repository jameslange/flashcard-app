import React from 'react';
import '../App.css'



const NewCard = ({state, dispatch}) => {

    const clickHandler = () =>{
        dispatch({
            type:'add-card',
        })
    }

   return( 
        <div className="inputDiv">
            <div>
                <input value={state.cardFront} onChange={(e)=>dispatch({type:'update-front', value:e.target.value})}placeholder='Front of Card'></input>
                <input value={state.cardBack} onChange={(e)=>dispatch({type:'update-back', value:e.target.value})} placeholder='Back of Card'></input>
            </div>
            <div className='buttonDiv'>
                <button onClick={clickHandler}>Add Card</button>
            </div>
        </div>
    
    )
}


 export default NewCard;