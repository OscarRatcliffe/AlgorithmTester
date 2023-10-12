"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bubbleSort_1 = require("./src/bubbleSort");
const insertionSort_1 = require("./src/insertionSort");
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
        if (isNaN(testNumsConverted) || testNumsConverted < 2) {
            console.clear();
            console.log("----------\nPlease enter a valid number greater than 1\n----------\n");
        }
        else {
            validInput = true;
        }
    }
    let generatedData = generateData(testNumsConverted);
    // ---------------------
    // Pick algorithm choice
    // ---------------------
    while (true) {
        const algorithmChoice = userInput("Do you want to use Bubble or Insertion sort?: ", ["B", "I", "T"]);
        switch (algorithmChoice) {
            // --------------
            // Insertion sort
            // --------------
            case ("I"):
                const insertionPerfStart = performance.now();
                let sortedListInsertion = (0, insertionSort_1.insertionSort)(generatedData);
                const insertionPerfEnd = performance.now();
                let insertionTimeTaken = insertionPerfEnd - insertionPerfStart;
                console.clear();
                console.log(`The insertion sort took ${insertionTimeTaken.toPrecision(3)}ms and retured the result ${sortedListInsertion}`);
                break;
            // -----------
            // Bubble sort
            // -----------
            case ("B"):
                const bubblePerfStart = performance.now();
                let sortedListBubble = (0, bubbleSort_1.bubbleSort)(generatedData);
                const bubblePerfEnd = performance.now();
                let bubbleTimeTaken = bubblePerfEnd - bubblePerfStart;
                console.clear();
                console.log(`The bubble sort took ${bubbleTimeTaken.toPrecision(3)}ms and retured the result ${sortedListBubble}`);
                break;
        }
        // ------------------
        // Check if run again
        // ------------------
        const runAgainChoice = userInput("Do you want to run again?", ["Y", "N"]);
        if (runAgainChoice == "N") {
            return 1;
        }
        else {
            // Pass
        }
    }
}
main();
module.exports.generateData = generateData;
//# sourceMappingURL=main.js.map