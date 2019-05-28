import Character from '../../../model/Character';
export type CharacterAction = {
    type: string,
    id: string
}

export abstract class CharacterReducer<A extends CharacterAction> {
    abstract getType(): string;
    abstract resolve(oldCharacter: Character, action: A): Character
}

const SET_CHARACTER_TYPE = "CHARACTER_SET"
export type SetCharacterAction = CharacterAction & {
    character : Character
}
export function SetCharacter(id: string, character: Character) : SetCharacterAction {
    return {type: SET_CHARACTER_TYPE, id: id, character: character}
} 
export class SetCharacterReducer extends CharacterReducer<SetCharacterAction> {
    getType(): string {
        return SET_CHARACTER_TYPE
    }    
    
    resolve(oldCharacter: Character, action: SetCharacterAction): Character {
        return action.character
    }
}