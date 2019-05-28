import React, { Component } from "react";
import Character from '../model/Character';
import withLoader from "../util/ReduxLoader/WithLoader";
import CharacterLoader from '../redux/loader/CharacterLoader';
import { CharacterProp } from '../redux/loader/CharacterLoader';

type CharDisplayProps = CharacterProp & {
    stuff: string
}

class CharacterDisplay extends Component<CharDisplayProps> {
    render() {
        let {character, stuff} = this.props
        return <div>
            {character.id} - {character.name} - {stuff}
        </div>
    }
}

export default withLoader(new CharacterLoader())(CharacterDisplay)