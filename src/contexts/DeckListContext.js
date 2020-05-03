import React, { createContext, Component } from 'react';

export const DeckListContext = createContext();
const extraTypes = ['Synchro Monster', 'XYZ Monster', 'Fusion Monster', 'Link Monster', 'Ritual Monster']
// const extraTypes = []
export default class DeckListContextProvider extends Component {
    state = {
        deckList: [],
        extraDeckList: [],
    }

    sortByType(array){
        array.sort((cardA, cardB) => {
            if(cardA.type > cardB.type){
                return 1
            } else if (cardA.type < cardB.type){
                return -1
            }
            return 0
        })
    }
    

    addCard(card) {
        const { deckList, extraDeckList } = this.state;

        if(extraTypes.includes(card.type)){
            extraDeckList.push(card)
            this.sortByType(extraDeckList)
        } else{
            deckList.push(card);
            this.sortByType(deckList)
        }
        this.setState({deckList, extraDeckList});
    }

    removeCard(cardToRemove, list){
        const { deckList, extraDeckList } = this.state;
        if (list === 'deck'){
            deckList.splice(deckList.findIndex(card=>card.id===cardToRemove.id),1)
        }else{
            extraDeckList.splice(extraDeckList.findIndex(card => card.id === cardToRemove.id), 1)
        }
        this.setState({ deckList, extraDeckList });

    }
    render(){
        return(
            <DeckListContext.Provider value={{...this.state, addCard: this.addCard.bind(this), removeCard: this.removeCard.bind(this)}}>
                {this.props.children}
            </DeckListContext.Provider>
        )
    }
}