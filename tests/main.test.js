const {bubbleSort, insertionSort, generateData} = require('../build/bundle')

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

    var generatedData = generateData(testSizes[i]);
    var sortedData = generatedData.sort((a,b) => a-b);

    test("Insertion sort scale", () => {
        expect(insertionSort(generatedData)).toEqual(sortedData);
    });

    test("Bubble sort scale", () => {
        expect(bubbleSort(generatedData)).toEqual(sortedData);
    });
}