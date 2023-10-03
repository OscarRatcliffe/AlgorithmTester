const readline = require("readline-sync");

// ---------
// Functions
// ---------

function generateData(length: number): Array<number> {
    var generatedData: Array<number> = [];

    for (let i = 0; i < length; i++) {
        generatedData.push(Math.floor(Math.random() * 100));
    }

    return generatedData;
}

// -------------
// Generate list
// -------------

var validInput: boolean = false;
while (!validInput) {

    console.log("How many test numbers do you want?")
    const testNumsWanted: string = readline.question();

    var testNumsConverted: number = parseInt(testNumsWanted);

    if (isNaN(testNumsConverted)) {
        console.clear();
        console.log("----------\nPlease enter a valid number\n----------\n");
    } else {
        validInput = true;
    }
}

let generatedData: Array<number> = generateData(testNumsConverted);

// ---------------------
// Pick algorithm choice
// ---------------------

console.log("Do you want to use (B)ubble or (I)nsertion sort?: ")
const algorithmChoice: string = readline.question();

switch (algorithmChoice) {
    case ("B"):

        console.time("Bubble Sort Execution Time"); // TODO change to clock cycles

        let sortedListBubble: Array<number> = bubbleSort(generatedData)

        console.clear();
        console.timeEnd(`Bubble Sort Execution Time`);
        console.log(sortedListBubble);

    case ("I"):

        console.time("Insertion Sort Execution Time"); // TODO change to clock cycles

        let sortedListInsertion: Array<number> = insertionSort(generatedData)

        console.clear();
        console.timeEnd(`Insertion Sort Execution Time`);
        console.log(sortedListInsertion);

}