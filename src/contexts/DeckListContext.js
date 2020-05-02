import React, { createContext, Component } from 'react';

export const DeckListContext = createContext();

export default class DeckListContextProvider extends Component {
    state = {
        deckList: []
    }

    addCard(card) {
        const { deckList } = this.state;
        deckList.push(card);
        this.setState(deckList);
    }
    render(){
        return(
            <DeckListContext.Provider value={{...this.state, addCard: this.addCard}}>
                {this.props.children}
            </DeckListContext.Provider>
        )
    }
}