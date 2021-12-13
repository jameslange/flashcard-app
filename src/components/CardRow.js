import React from 'react';
import '../App.css';


const CardRow = ({state, dispatch}) => {

  const removeCard = (event) => {
      dispatch({
          type:'remove-card',
          index:event.target.dataset.index,
      })
  }
  
  const editCard = (event) =>{
      dispatch({
          type:'to-edit-card',
          index:event.target.dataset.index,
      }) 
  }




  return( 
       <>
    {state.listOfCards.map((card, index)=>(
        <tr key={index}>
            <td>{index+1}</td>
            <td>{card.front}</td>
            <td>{card.back}</td>
            <td>
                <button  data-index={index} onClick={removeCard}>Delete</button>
            </td>
            <td>
                <button data-index={index} onClick={editCard}>Edit</button>
            </td>
        </tr>
    ))}
   
    </>


    )
}

export default CardRow;