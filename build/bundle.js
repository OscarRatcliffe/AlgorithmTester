function bubbleSort(toSort) {
    var earlyExit = false;
    while (!earlyExit) {
        earlyExit = true;
        for (var i = 0; i < toSort.length; i++) {
            var num1 = toSort[i];
            var num2 = toSort[i + 1];
            if (num1 > num2) {
                toSort[i] = num2;
                toSort[i + 1] = num1;
                earlyExit = false;
            }
        }
    }
    return toSort;
}
function insertionSort(toSort) {
}
const readline = require("readline-sync");
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
        console.time();
        let sortedList = bubbleSort(generatedData);
        console.timeEnd(`The final list is ${sortedList} and took`);
        break;
    case ("I"):
        break;
}
//# sourceMappingURL=bundle.js.map