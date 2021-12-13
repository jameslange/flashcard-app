export const initialState={
    cardFront:"",
    cardBack:"",
    cardToEdit:"",
    newCard:true,
    listOfCards:[],
};

export  function reducer (state, action){

    switch(action.type){
        case('remove-card'):
    
        const temp = [...state.listOfCards];
        temp.splice(action.index, 1);
       
        return{
            ...state,
            listOfCards:[...temp]
        };

        case('to-edit-card'):
        return{
            ...state,
            cardToEdit:action.index,
            newCard:false,
        };

        case('edit-card'):
        const card = state.listOfCards[state.cardToEdit];
        const temp1 = [...state.listOfCards];

        card.front = state.cardFront;
        card.back = state.cardBack;

        temp1[state.cardToEdit] = card;

        return{
            ...state,
            listOfCards:[...temp1],
            newCard:true,
            cardFront:'',
            cardBack:'',
        }

        case('add-card'):

        let currentCard = {
            front:state.cardFront,
            back:state.cardBack,
        }
        const currList = [...state.listOfCards];
        currList.push(currentCard);

        return{
            ...state,
            cardFront:'',
            cardBack:'',
            listOfCards:[...currList],
            
        };

        case('update-front'):
        return{
            ...state,
            cardFront:action.value
        };
        case('update-back'):
        return{
            ...state,
            cardBack:action.value
        }

        case('shuffle-cards'):
        const temp2 = [...state.listOfCards];
        for (let i = temp2.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i);
            let k = temp2[i];
            temp2[i] = temp2[j];
            temp2[j] = k;
        }
        return{
            ...state,
            listOfCards:[...temp2]
          }

        case('card-storage'):

        return{
            ...state,
            listOfCards: (localStorage.getItem('listOfCards')!== null)&&(localStorage.getItem('listOfCards')!== "") && JSON.parse(localStorage.getItem('listOfCards'))
        }

        
        


        default: {
            throw Error('Unknown action: ' + action.type);
        }
    
    }
    
}