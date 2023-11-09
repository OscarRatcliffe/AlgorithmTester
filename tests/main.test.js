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

for (let i = 0; i < testSizes.length; i++) {

    const unsortedData = generateData(testSizes[i]);    
    
    test("Bubble sort scale", () => {
        expect(bubbleSort(unsortedData)).toEqual(unsortedData.sort((a,b) => a-b));
    });
}

for (let i = 0; i < testSizes.length; i++) {

    const unsortedData = generateData(testSizes[i]);    
    
    test("Insertion sort scale", () => {
        expect(insertionSort(unsortedData)).toEqual(unsortedData.sort((a,b) => a-b));
    });
}

