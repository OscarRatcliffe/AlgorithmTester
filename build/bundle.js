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
module.exports.bubbleSort = bubbleSort;
function insertionSort(toSort) {
    var sortedArray = [];
    for (let i = 0; i < toSort.length; i++) {
        sortedArray.unshift(toSort[i]);
        for (var j = 0; j < sortedArray.length; j++) {
            var num1 = sortedArray[j];
            var num2 = sortedArray[j + 1];
            if (num1 > num2) {
                sortedArray[j] = num2;
                sortedArray[j + 1] = num1;
            }
        }
    }
    return sortedArray;
}
module.exports.main = insertionSort;
const readline = require("readline-sync");
// ---------
// Functions
// ---------
function generateData(length) {
    var generatedData = [];
    for (let i = 0; i < length; i++) {
        generatedData.push(Math.floor(Math.random() * 100));
    }
    return generatedData;
}
function userInput(question, validReturns) {
    while (true) {
        console.log(`${question} (${validReturns}):`);
        const userResponse = readline.question();
        if (validReturns.includes(userResponse)) {
            return userResponse;
        }
        else {
            console.clear();
            console.log(`----------\nPlease enter a valid response: ${validReturns}\n----------\n`);
        }
    }
}
// -------------
// Generate list
// -------------
function main() {
    var validInput = false;
    while (!validInput) {
        console.log("How many test numbers do you want?");
        const testNumsWanted = readline.question();
        var testNumsConverted = parseInt(testNumsWanted);
        if (isNaN(testNumsConverted)) {
            console.clear();
            console.log("----------\nPlease enter a valid number\n----------\n");
        }
        else {
            validInput = true;
        }
    }
    let generatedData = generateData(testNumsConverted);
    // ---------------------
    // Pick algorithm choice
    // ---------------------
    var appRunning = true;
    while (appRunning) {
        const algorithmChoice = userInput("Do you want to use Bubble or Insertion sort?: ", ["B", "I"]);
        switch (algorithmChoice) {
            // --------------
            // Insertion sort
            // --------------
            case ("I"):
                const insertionPerfStart = performance.now();
                let sortedListInsertion = insertionSort(generatedData);
                const insertionPerfEnd = performance.now();
                let insertionTimeTaken = insertionPerfEnd - insertionPerfStart;
                console.clear();
                console.log(`The bubble sort took ${insertionTimeTaken.toPrecision(3)}ms and retured the result ${sortedListInsertion}}`);
                validInput = true;
                break;
            // -----------
            // Bubble sort
            // -----------
            case ("B"):
                const bubblePerfStart = performance.now();
                let sortedListBubble = bubbleSort(generatedData);
                const bubblePerfEnd = performance.now();
                let bubbleTimeTaken = bubblePerfEnd - bubblePerfStart;
                console.clear();
                console.log(`The bubble sort took ${bubbleTimeTaken.toPrecision(3)}ms and retured the result ${sortedListBubble}`);
                validInput = true;
                break;
        }
        // ------------------
        // Check if run again
        // ------------------
        const runAgainChoice = userInput("Do you want to run again?", ["Y", "N"]);
        if (runAgainChoice == "N") {
            validInput = true;
            appRunning = false;
        }
        else {
            validInput = true;
        }
    }
}
main();
module.exports.main = main;
//# sourceMappingURL=bundle.js.map