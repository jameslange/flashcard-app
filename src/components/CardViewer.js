import React from 'react';
import CurrentCard from './CurrentCard';
import { Link} from 'react-router-dom';
import '../App.css'




const CardViewer = (props) => {

    const mainStyle={
        display: 'flex',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: 'center', 
    }

  return( <section style={mainStyle} >
        <h1>Card Viewer</h1>
        <CurrentCard setListOfCards={props.setListOfCards} listOfCards={props.listOfCards}/>
       
        <Link to='/'> <button style={{marginLeft:'1.5rem'}} >Go to editor</button></Link> 
        
    </section> 
    )
}


export default CardViewer;