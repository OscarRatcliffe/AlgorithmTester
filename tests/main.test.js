const {bubbleSort} = require('../build/src/bubbleSort')
const {insertionSort} = require('../build/src/insertionSort')
const {generateData} = require('../build/main')

// ------------------
// Sorting algorithms 
// ------------------

const inputData = [92, 86, 58, 35, 13];
const expectedOutput = [13, 35, 58, 86, 92];
 
test("Bubble sort func", () => {
    expect(bubbleSort(inputData)).toEqual(expectedOutput)
});

test("Insertion sort func", () => {
    expect(insertionSort(inputData)).toEqual(expectedOutput)
});


// --------------
// Required tests
// --------------

const testSizes = [100, 1000, 5000];

const testData = [];

for (let i = 0; i < testSizes.length; i++) { //Test for each size in given list

    const unsortedData = generateData(testSizes[i]); //Use generate Data func defined in main.ts
    
    testData.push(unsortedData)
}

for (let i = 0; i < testData.length; i++) { //Test for each size in given list  
    test("Bubble sort scale", () => {
        expect(bubbleSort(testData[i])).toEqual(testData[i].sort((a,b) => a-b));
    });
}

for (let i = 0; i < testData.length; i++) { //Test for each size in given list  
    test("Insertion sort scale", () => {
        expect(insertionSort(testData[i])).toEqual(testData[i].sort((a,b) => a-b));
    });
}
