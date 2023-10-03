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
// -------------
// Generate list
// -------------
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
    console.log("Do you want to use (B)ubble or (I)nsertion sort?: ");
    const algorithmChoice = readline.question();
    switch (algorithmChoice) {
        case ("B"):
            const insertionPerfStart = performance.now();
            let sortedListBubble = bubbleSort(generatedData);
            const insertionPerfEnd = performance.now();
            console.clear();
            console.log(`The bubble sort took ${insertionPerfEnd - insertionPerfStart}ms and retured the result ${sortedListBubble}}`);
        case ("I"):
            const bubblePerfStart = performance.now();
            let sortedListInsertion = insertionSort(generatedData);
            const bubblePerfEnd = performance.now();
            console.clear();
            console.log(`The bubble sort took ${bubblePerfEnd - bubblePerfStart}ms and retured the result ${sortedListInsertion}}`);
    }
    validInput = false;
    while (true) {
        console.log("Do you want to run again (Y/N): ");
        const runAgainChoice = readline.question();
        if (runAgainChoice == "N") {
            validInput = true;
            appRunning = false;
        }
        else if (runAgainChoice == "Y") {
            validInput = true;
        }
        else {
            console.clear();
            console.log("----------\nPlease enter either 'Y' or 'N'\n----------\n");
        }
    }
}
//# sourceMappingURL=bundle.js.map