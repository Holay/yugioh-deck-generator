import React, { createContext, Component } from 'react';

export const DeckListContext = createContext();
const extraTypes = ['Synchro Monster', 'XYZ Monster', 'Fusion Monster', 'Link Monster', 'Ritual Monster']
// const extraTypes = []
export default class DeckListContextProvider extends Component {
    state = {
        deckList: [],
        extraDeckList: []
    }
    

    addCard(card) {
        const { deckList, extraDeckList } = this.state;

        if(extraTypes.includes(card.type)){
            extraDeckList.push(card)
        } else{
            deckList.push(card);
        }
        this.setState({deckList, extraDeckList});
    }
    render(){
        return(
            <DeckListContext.Provider value={{...this.state, addCard: this.addCard.bind(this)}}>
                {this.props.children}
            </DeckListContext.Provider>
        )
    }
}