import { bubbleSort } from "./src/bubbleSort";
import { insertionSort } from "./src/insertionSort"
const readline = require("readline-sync");

// ---------
// Functions
// ---------

function generateData(length: number): Array<number> {
    var generatedData: Array<number> = [];

    for (let i = 0; i < length; i++) {
        generatedData.push(Math.floor(Math.random() * 100)); //Push random int betweeen 0 and 100
    }

    return generatedData;
}

function userInput(question: string, validReturns: Array<String>): string {
    
    while (true) {

        console.log(`${question} (${validReturns}):`) //Show question and valid options to the user
        const userResponse: string = readline.question();

        if (validReturns.includes(userResponse)) { //Check the users response is a valid return
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

        if (isNaN(testNumsConverted) || testNumsConverted < 2) { //Check input is both a number and less than 2
            console.clear();
            console.log("----------\nPlease enter a valid number greater than 1\n----------\n");
        } else {
            validInput = true;
        }
    }

    let generatedData: Array<number> = generateData(testNumsConverted);

    // ---------------------
    // Pick algorithm choice
    // ---------------------

    while (true) {
        
        const algorithmChoice: string = userInput("Do you want to use Bubble or Insertion sort?: ", ["B", "I", "T"]) //Use custom input function to save rewriting code
        switch (algorithmChoice) {

            // --------------
            // Insertion sort
            // --------------

            case ("I"):
        
                    const insertionPerfStart = performance.now(); //Start timer
                    let sortedListInsertion: Array<number> = insertionSort(generatedData) //Run insertion sort
                    const insertionPerfEnd = performance.now(); //End timer
            
                    let insertionTimeTaken: number = insertionPerfEnd-insertionPerfStart; //Calculate total time

                    console.clear();
                    console.log(`The insertion sort took ${insertionTimeTaken.toPrecision(3)}ms and retured the result ${sortedListInsertion}`);
    
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
                console.log(`The bubble sort took ${bubbleTimeTaken.toPrecision(3)}ms and retured the result ${sortedListBubble}`); //Round return to 3dp and output to user

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
module.exports.generateData = generateData; //Export for testing
