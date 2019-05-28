import CharacterStore from '../CharacterStore';
import Character from '../../model/Character';
export default class MockCharacterStore implements CharacterStore {
    getCharacters() : Character[] {
        return [

        ];
    }
}