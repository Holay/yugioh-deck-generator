import React, { createContext, Component } from 'react';

export const DeckListContext = createContext();
const extraTypes = ['Synchro Monster', 'XYZ Monster', 'Fusion Monster', 'Link Monster', 'Ritual Monster']
export default class DeckListContextProvider extends Component {
    state = {
        deckList: [],
        extraDeckList: [],
        reducedDeckList: [],
        reducedExtraDeckList: [],
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
    
    //Taken from https://stackoverflow.com/questions/47774696/javascript-counting-duplicates-in-array-of-object-with-many-fields-in-es6
    reduceList(list) {
    const result = [...list.reduce((r, e) => {
        let k = `${e.name}|${e.id}`;
        if (!r.has(k)) r.set(k, { ...e, count: 1 })
        else r.get(k).count++
        return r;
    }, new Map).values()]

    return result;
    }

    addCard(card) {
        let { deckList, extraDeckList, reducedDeckList, reducedExtraDeckList } = this.state;
        if (
            (reducedDeckList.find(cardToFind => cardToFind.name === card.name) && reducedDeckList.find(cardToFind => cardToFind.name === card.name).count >= 3) 
            || (reducedExtraDeckList.find(cardToFind => cardToFind.name === card.name) && reducedExtraDeckList.find(cardToFind => cardToFind.name === card.name).count >= 3)) 
            {
            return
        }
        if(extraTypes.includes(card.type) && extraDeckList.length < 15){
            extraDeckList.push(card);
            this.sortByType(extraDeckList);
            reducedExtraDeckList = this.reduceList(extraDeckList);
        } else if (!extraTypes.includes(card.type) && deckList.length < 60){
            deckList.push(card);
            this.sortByType(deckList)
            reducedDeckList = this.reduceList(deckList);
        }
        this.setState({deckList, extraDeckList, reducedDeckList, reducedExtraDeckList});
    }

    removeCard(cardToRemove, list){
        let { deckList, extraDeckList, reducedDeckList, reducedExtraDeckList } = this.state;
        if (list === 'deck'){
            deckList.splice(deckList.findIndex(card => card.id === cardToRemove.id), 1)
            reducedDeckList = this.reduceList(deckList);
        }else{
            extraDeckList.splice(extraDeckList.findIndex(card => card.id === cardToRemove.id), 1)
            reducedExtraDeckList = this.reduceList(extraDeckList);
        }
        this.setState({ deckList, extraDeckList, reducedDeckList, reducedExtraDeckList });

    }
    render(){
        return(
            <DeckListContext.Provider value={{...this.state, addCard: this.addCard.bind(this), removeCard: this.removeCard.bind(this)}}>
                {this.props.children}
            </DeckListContext.Provider>
        )
    }
}