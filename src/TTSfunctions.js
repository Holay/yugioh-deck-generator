import { CARD_BACK_URI } from './config'
//Reusing code from my other app, the MTG booster pack generator
export function formatForTTS(packs, name) {
    const formattedPacks = {
        SaveName: "",
        GameMode: "",
        Gravity: 0.5,
        PlayArea: 0.5,
        Date: "",
        Table: "",
        Sky: "",
        Note: "",
        Rules: "",
        XmlUI: "",
        LuaScript: "",
        LuaScriptState: "",
        ObjectStates: generateTTSPacks(packs)
    }

    download(name, JSON.stringify(formattedPacks))

}

export function generateTTSPacks(packs) {
    const TTSPacks = packs.map((pack, deckIndex) => {
        if(pack.length>1){
        return ({
        Name: "Deck",
        Transform: {
            posX: -4 * calculatePosition(deckIndex, 'X'),
            posY: 1,
            posZ: -4 * calculatePosition(deckIndex, "Z"),
            rotX: 0,
            rotY: 180,
            rotZ: 180,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1,
        },
        Nickname: "",
        Description: "",
        GMNotes: "",
        ColorDiffuse: {
            r: 0.713235259,
            g: 0.713235259,
            b: 0.713235259
        },
        Locked: false,
        Grid: true,
        Snap: true,
        IgnoreFoW: false,
        Autoraise: true,
        Sticky: true,
        Tooltip: true,
        GridProjection: false,
        HideWhenFaceDown: true,
        Hands: false,
        SidewaysCard: false,
        DeckIDs: pack.map((card, cardIndex) => Number(`${1 + deckIndex}${cardIndex}00`)),

        CustomDeck: generateCustomDeckObject(deckIndex, pack),
        XmlUI: "",
        LuaScript: "",
        LuaScriptState: "",
        ContainedObjects: pack.map((card, cardIndex) => {
            return ({
                Name: "CardCustom",
                Transform: {
                    posX: 0,
                    posY: 0,
                    posZ: 0,
                    rotX: 0,
                    rotY: 180,
                    rotZ: 180,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                },
                Nickname: card.name,
                Description: card.desc,
                GMNotes: "",
                ColorDiffuse: {
                    r: 0.713235259,
                    g: 0.713235259,
                    b: 0.713235259
                },
                Locked: false,
                Grid: true,
                Snap: true,
                IgnoreFoW: false,
                Autoraise: true,
                Sticky: true,
                Tooltip: true,
                GridProjection: false,
                HideWhenFaceDown: true,
                Hands: true,
                SidewaysCard: false,
                CardID: Number(`${1 + deckIndex}${cardIndex}00`),
                CustomDeck: {
                    [`${1 + deckIndex}${cardIndex}`]: {
                        FaceURL: card.card_images[0].image_url,
                        BackURL: CARD_BACK_URI,
                        NumWidth: 1,
                        NumHeight: 1,
                        BackIsHidden: true,
                        UniqueBack: false
                    }
                },
                XmlUI: "",
                LuaScript: "",
                LuaScriptState: "",

            })
        }
        )

    })

    } else if (pack.length === 1){ 
            return {
                Name: "CardCustom",
                Transform: {
                    posX: -4 * calculatePosition(deckIndex, 'X'),
                    posY: 1,
                    posZ: -4 * calculatePosition(deckIndex, "Z"),
                    rotX: 0,
                    rotY: 180,
                    rotZ: 180,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1,
                },
                Nickname: pack[0].name,
                Description: pack[0].desc,
                GMNotes: "",
                ColorDiffuse: {
                    r: 0.713235259,
                    g: 0.713235259,
                    b: 0.713235259
                },
                Locked: false,
                Grid: true,
                Snap: true,
                IgnoreFoW: false,
                Autoraise: true,
                Sticky: true,
                CardID: Number(`${1 + deckIndex}000`),
                Tooltip: true,
                GridProjection: false,
                HideWhenFaceDown: true,
                Hands: false,
                SidewaysCard: false,
                CustomDeck: generateCustomDeckObject(deckIndex, pack),
                XmlUI: "",
                LuaScript: "",
                LuaScriptState: "",
            }
    }

})
        return TTSPacks
}

export function generateCustomDeckObject(deckIndex, pack) {
    const result = {}
    pack.forEach((card, cardIndex) => {
        result[`${1 + deckIndex}${cardIndex}`] = {
            FaceURL: card.card_images[0].image_url,
            BackURL: CARD_BACK_URI,
            NumWidth: 1,
            NumHeight: 1,
            BackIsHidden: true,
            UniqueBack: false
        }
    })
    return result
}

export function calculatePosition(index, coordinate) {
    if (coordinate === 'X') {
        return index % 6
    }
    if (coordinate === 'Z') {
        return Math.floor(index / 6)
    }
}

export async function download(name, decks){
    const fileName = name;
    const json = decks
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}