import React, {useState} from 'react';
import '../App.css';
const cardStyle = {
    padding:'8rem',
    border:'2px solid rgb(14, 13, 13)',
    width:'20rem',
    height:'4rem',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginBottom:'1rem',
    backgroundColor:'#C0D1DE',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',

}

const parentStyle={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    borderBottom:'2px solid black',
    marginBottom:'1rem',
}

const buttonStyle= {
    display:'flex',
    width:'100%',
    justifyContent:'space-between',
    marginBottom:'1rem'
}

const CurrentCard = (props) => {
    const [currentSide, setSide] =  useState(true);
    const [cardNumber, setCardNumber] = useState(0);
    
   
    
    const displayCurrentCard= () =>{
        let currentList;
         if(cardNumber < 0) setCardNumber(0);
         if(props.listOfCards.length>0 && cardNumber>=props.listOfCards.length) setCardNumber(props.listOfCards.length-1);
        if(props.listOfCards.length>0 && (cardNumber>= 0 && cardNumber<props.listOfCards.length)){
            currentList = 
                currentSide ? props.listOfCards[cardNumber].front:
                props.listOfCards[cardNumber].back;
                return currentList
         }
    }
    

     const nextCard = () =>{
         if(cardNumber <= props.listOfCards.length) setCardNumber(cardNumber+1);
         if(cardNumber+1 === props.listOfCards.length) setCardNumber(0);
         if(!currentSide) setSide(true);
     }
     const prevCard = () => {
        if(cardNumber >= 0) setCardNumber(cardNumber-1);
        if(!currentSide) setSide(true);
     }

    const flipCard = () =>{
        setSide(!currentSide);
    }
    const shuffleCards = () =>{
        const temp = [...props.listOfCards];
        for (let i = temp.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let k = temp[i];
            temp[i] = temp[j];
            temp[j] = k;
          }
        props.setListOfCards(temp);
    }
    
    return(
    <div style={parentStyle}>
        <p>Card {cardNumber+1}/{props.listOfCards.length}</p>
        <div onClick={flipCard} style={cardStyle}>
            <p>{displayCurrentCard()}</p>
        </div>
        <div style={buttonStyle}>
            <button  onClick={prevCard} >Previous Card</button>
            <button  onClick={shuffleCards} > Shuffle Cards</button>
            <button  onClick={nextCard} > Next Card</button>
        </div>
    </div>
)
    }

export default CurrentCard; 

