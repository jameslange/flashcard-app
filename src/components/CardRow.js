import React from 'react';
import '../App.css';


const CardRow = (props) => {


  const removeCard = (event) => {
      const index = event.target.dataset.index;
    
      const temp = [...props.listOfCards];
      temp.splice(index, 1);
      props.setListOfCards([...temp]);
  }
  
  const editCard = (event) =>{
      props.setCardToEdit(event.target.dataset.index);
      props.changeToEdit(false);
  }




  return( 
       <>
    {props.listOfCards.map((card, index)=>(
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