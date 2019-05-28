import { CharacterAction, CharacterReducer } from './CharacterAction';
import Character from '../../../model/Character';

const ADD_GOLD_NAME = "CHARACTER_ADD_GOLD"
type AddGoldAction = CharacterAction & {
    amount: number
}
export function AddGold(id : string, amount : number) : AddGoldAction {
    return {type: ADD_GOLD_NAME, id: id, amount: amount}
}

export class AddGoldReducer extends CharacterReducer<AddGoldAction> {
    getType(): string {
        return ADD_GOLD_NAME
    }   
    
    resolve(oldCharacter: Character, action: AddGoldAction): Character {
        return oldCharacter.setGold(oldCharacter.gold + action.amount)
    }
}

const SET_GOLD_NAME = "CHARACTER_SET_GOLD"
type SetGoldAction = CharacterAction & {
    amount: number
}
export function SetGold(id : string, amount : number) : SetGoldAction {
    return {type: SET_GOLD_NAME, id: id, amount: amount}
}

export class SetGoldReducer extends CharacterReducer<SetGoldAction> {
    getType(): string {
        return ADD_GOLD_NAME
    }   
    
    resolve(oldCharacter: Character, action: SetGoldAction): Character {
        return oldCharacter.setGold(action.amount)
    }
}

export type GoldAction = SetGoldAction | AddGoldAction
export const GoldReducers:CharacterReducer<GoldAction>[] = [new AddGoldReducer(), new SetGoldReducer()]