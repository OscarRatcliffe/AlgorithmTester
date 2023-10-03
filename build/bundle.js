function bubbleSort(toSort) {
}
function insertionSort(toSort) {
}
const readline = require("readline-sync");
const bubbleSortFunc = require("./packages/bubbleSort");
console.log("How many test numbers do you want?");
const testNumsWanted = readline.question();
var testNumsConverted = parseInt(testNumsWanted); //TODO handle errors
var generatedData = [];
for (let i = 0; i < testNumsConverted; i++) {
    generatedData.push(Math.floor(Math.random() * 100));
}
console.log(generatedData);
console.log("Do you want to use (B)ubble or (I)nsertion sort?: ");
const algorithmChoice = readline.question();
switch (algorithmChoice) {
    case ("B"):
        console.time("Bubble Sort Execution Time");
        let sortedList = bubbleSortFunc.bubbleSort(generatedData);
        console.timeEnd("Bubble Sort Execution Time");
        break;
    case ("I"):
        break;
}
//# sourceMappingURL=bundle.js.map