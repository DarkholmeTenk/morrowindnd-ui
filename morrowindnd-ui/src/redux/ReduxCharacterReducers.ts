import { CharacterReducer, CharacterAction } from '../state/actions/character/CharacterAction';
import Character from '../model/Character';
import AllActions from '../state/actions/character/AllActions';

type CharacterState = {[key:string]: Character}
type Reducer = (oldState:CharacterState, action:CharacterAction)=>CharacterState;
const defaultState : CharacterState = {}
function toReduxReducer<A extends CharacterAction>(cr : CharacterReducer<A>) : Reducer {
    return function(state:CharacterState = defaultState, action : CharacterAction) : CharacterState {
        if(action.id != cr.getType()) return state
        let a = action as A
        let c = state[action.id]
        let nc = cr.resolve(c, a)
        return Object.assign({}, state, {[action.id]: nc})
    }
}

function toSingleReducer(cr : CharacterReducer<any>[]) : Reducer {
    let t:{[type:string]:Reducer} = {}
    cr.forEach(c=>{
        let type = c.getType()
        let reducer = toReduxReducer(c)
        t[type] = reducer
    })
    return (oldState: CharacterState, action:CharacterAction):CharacterState=>{
        let r = t[action.type]
        if(r) {
            return r(oldState, action)
        } else {
            return oldState
        }
    }
}

export default toSingleReducer(AllActions)