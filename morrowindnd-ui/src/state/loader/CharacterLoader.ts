import Character from '../../model/Character';
import { Loader } from '../../util/ReduxLoader/WithLoader';

type LoaderReq = {
    characterID: string
}

export type CharacterProp = {
    character: Character
}

export default class CharacterLoader implements Loader<LoaderReq, CharacterProp> {
    async load(a: LoaderReq): Promise<CharacterProp> {
        return {character : new Character(a.characterID, "Name", 50)}
    }
}