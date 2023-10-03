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

var appRunning:boolean = true;
while (appRunning) {
    validInput = false;
    while (!validInput) {
        console.log("Do you want to use (B)ubble or (I)nsertion sort?: ")
        const algorithmChoice: string = readline.question();
        
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

                validInput = true;
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

                validInput = true;
                break;
            
            // --------------
            // Input checking
            // --------------

            default:
                console.clear();
                console.log("----------\nPlease enter either 'B' or 'I'\n----------\n");
        }
    }

    // ------------------
    // Check if run again
    // ------------------

    validInput = false;
    while (!validInput) {
        console.log("Do you want to run again (Y/N): ")
        const runAgainChoice: string = readline.question();
        if (runAgainChoice == "N") {
            validInput = true;
            appRunning = false;
        } 
        else if (runAgainChoice == "Y") {
            validInput = true;
        } else {
            console.clear();
        console.log("----------\nPlease enter either 'Y' or 'N'\n----------\n");
        }
    }

}