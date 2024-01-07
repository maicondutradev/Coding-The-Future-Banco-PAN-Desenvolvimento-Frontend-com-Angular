//Arrays
let dados: string[] = ["Maicon", "Mirela"];
let dados2: Array<string> = ["Maicon", "Mirela"];

//Arrays de Multi Types
let info: (string | number)[] = ["Maicon", 23];

//Arrays métodos são os mesmos do javascript
dados.pop()

//Tuplas
let boleto:[string, number,number] = ["agua conta", 199.90, 231244];


//Dates
let aniversario:Date = new Date("2022-12-01 05:00)");
console.log(aniversario.toString());