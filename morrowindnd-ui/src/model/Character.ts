export default class Character {
    constructor(
        public id:string,
        public name:string,
        public gold:number
    ){}

    setGold(gold: number) : Character {
        return new Character(this.id, this.name, gold)
    }
}