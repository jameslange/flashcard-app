import React from 'react';
import '../App.css';

const EditCard = ({state, dispatch}) => {
     
    const editCard = () => {
     dispatch({
         type:'edit-card',
     })

    }
   
   return( <div className="inputDiv">
        <div>
            <input value={state.cardFront} onChange={(e)=>dispatch({type:'update-front', value:e.target.value})} placeholder='Edit Front of Card'></input>
            <input value={state.cardBack} onChange={(e)=>dispatch({type:'update-back', value:e.target.value})} placeholder='Edit Back of Card'></input>
        </div>
        <div className='buttonDiv'>
            <button onClick={editCard}>Edit Card</button>
        </div>
    </div>
    )
}


export default EditCard;
