//Funções em typescript
function addNumber(x: number, y: number){
    return x + y;
}

let soma: number = addNumber(5,5);

console.log(soma);

function addToHello(name:string):string {
    return `Hello ${name}`;
}

console.log(addToHello("Maicon"));

//Funções MultiTypes
function CallToPhone(phone: number | string): number | string{
    return phone;
}

console.log(CallToPhone("229991992921")) //String
console.log(CallToPhone(229991992921)) //Number


//Funções Async
async function getDatabase(id: number) :Promise<number | string> {
    return "Maicon";
}