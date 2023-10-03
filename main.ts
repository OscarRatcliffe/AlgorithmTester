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

function userInput(question: string, validReturns: Array<String>): string {
    
    while (true) {

        console.log(`${question} (${validReturns}):`)
        const userResponse: string = readline.question();

        if (validReturns.includes(userResponse)) {
            return userResponse
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

    while (true) {
        
        const algorithmChoice: string = userInput("Do you want to use Bubble or Insertion sort?: ", ["B", "I"])
        switch (algorithmChoice) {

            // --------------
            // Insertion sort
            // --------------

            case ("I"):
        
                const insertionPerfStart = performance.now();
                let sortedListInsertion: Array<number> = insertionSort(generatedData)
                const insertionPerfEnd = performance.now();
        
                let insertionTimeTaken: number = insertionPerfEnd-insertionPerfStart;
                console.clear();
                console.log(`The bubble sort took ${insertionTimeTaken.toPrecision(3)}ms and retured the result ${sortedListInsertion}}`);

                break;
        
            
            // -----------
            // Bubble sort
            // -----------

            case ("B"):
        
                const bubblePerfStart = performance.now();
                let sortedListBubble: Array<number> = bubbleSort(generatedData)
                const bubblePerfEnd = performance.now();
    

                let bubbleTimeTaken = bubblePerfEnd-bubblePerfStart
            
                console.clear();
                console.log(`The bubble sort took ${bubbleTimeTaken.toPrecision(3)}ms and retured the result ${sortedListBubble}`);

                break;
            
        }

        // ------------------
        // Check if run again
        // ------------------

        const runAgainChoice: string = userInput("Do you want to run again?",["Y","N"])
        if (runAgainChoice == "N") {
            return 1;
        } 
        else {
            // Pass
        }
    }

}

main();
module.exports.main = main;