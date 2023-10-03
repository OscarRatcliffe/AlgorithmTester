const readline = require("readline-sync");

console.log("How many test numbers do you want?")
const testNumsWanted: string = readline.question();

var testNumsConverted: number = parseInt(testNumsWanted); //TODO handle errors
var generatedData: Array<number> = [];

for (let i = 0; i < testNumsConverted; i++) {
    generatedData.push(Math.floor(Math.random() * 100));
}

console.log(generatedData);

console.log("Do you want to use (B)ubble or (I)nsertion sort?: ")
const algorithmChoice: string = readline.question();

switch (algorithmChoice) {
    case ("B"):
            console.time("Bubble Sort Execution Time");
            let sortedList: Array<number> = bubbleSort(generatedData)
            console.timeEnd(`Bubble Sort Execution Time`);
            console.log(sortedList);
            break;
    case ("I"):
        break;
}