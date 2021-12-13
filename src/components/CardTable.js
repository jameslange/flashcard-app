import React from 'react';
import CardRow from './CardRow';
import '../App.css';

const tableStyle ={
    marginBottom:'2rem',
}
const CardTable = ({state, dispatch}) => (

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
      
        <CardRow 
        state={state}
        dispatch={dispatch}
        />
        </tbody>
    </table>
)


export default CardTable;