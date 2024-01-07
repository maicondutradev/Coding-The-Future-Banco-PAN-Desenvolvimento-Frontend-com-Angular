//classes
class Character {
    name: string;
    strength: number;
    skill: string;

    constructor(name: string, strenght: number, skill: string){
        this.name = name;
        this.strength = strenght;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.skill} caused ${this.strength} damage points`);
    }
}

//Character: superclass
//Magician: subclass
class Magician extends Character {
    magicPoints:number;
    constructor(name: string, strength: number, skill: string, magicPoints: number){
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}


const p1 = new Character ("Ryu", 10, "Hadouken")
const p2 = new Magician("Mago", 5, "Fire Ball", 15)
console.log(p2);
console.log(p1);
p1.attack();
p2.attack();

//Data modifiers: public, private, protected
