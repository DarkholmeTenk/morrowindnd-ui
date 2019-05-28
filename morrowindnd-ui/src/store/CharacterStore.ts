import Character from '../model/Character';
export default interface CharacterStore {
    getCharacters() : Character[]
}