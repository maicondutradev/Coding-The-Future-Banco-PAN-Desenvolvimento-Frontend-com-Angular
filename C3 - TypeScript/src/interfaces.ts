//Interfaces (type x interface)

//Type
type robot1 = {
    readonly id: number | string;
    name: string;
}

const bot1: robot1 = {
    id: 1,
    name: "Megamen"
}

//Interface
interface robot2 {
    id: number | string;
    name: string;
    sayHello(): string;
}

const bot2: robot2 = {
    id: 1,
    name: "Megamen",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
}

console.log(bot1);
console.log(bot2);

class Pessoa implements robot2{
    id: string | number;
    name: string;
    
    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "Maicon");

console.log(p.sayHello());