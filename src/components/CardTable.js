import React,{useEffect} from 'react';
import CardRow from './CardRow';
import '../App.css';

const tableStyle ={
    marginBottom:'2rem',
}
const CardTable = (props) => (

    <table style={tableStyle}>
        <thead>
            <tr>
                <th>Card #</th>
                <th>Front</th>
                <th>Back</th>
                <th>Delete</th>
                <th>Edit</th>
            </tr>
        </thead>
        <tbody>
        {/* {  
        useEffect(()=>{
           if(props.listOfCards.length>0){
            <CardRow
             listOfCards={props.listOfCards}
             setListOfCards={props.setListOfCards}
             setCardToEdit={props.setCardToEdit}
             changeToEdit={props.changeToEdit}
             />
           }
        },[])} */}
       

        <CardRow 
        listOfCards={props.listOfCards}
        setListOfCards={props.setListOfCards}
        setCardToEdit={props.setCardToEdit}
        changeToEdit={props.changeToEdit}
        />
        </tbody>
    </table>
)


export default CardTable;