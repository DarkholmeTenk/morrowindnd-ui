import { SetCharacterAction, SetCharacterReducer, CharacterReducer } from './CharacterAction';
import { GoldAction, GoldReducers } from './GoldActions';

export default [
    {...GoldReducers},
    new SetCharacterReducer()
] as CharacterReducer<any>[]