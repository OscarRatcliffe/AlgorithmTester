const {bubbleSort, insertionSort, main} = require('../build/bundle')
const readline = require('readline-sync');

// ------------------
// Sorting algorithms 
// ------------------

const inputData = [92, 86, 58, 35, 13];
const expectedOutput = [13, 35, 58, 86, 92]

test("Bubble sort func", () => {
    expect(bubbleSort(inputData)).toEqual(expectedOutput)
});


test("Insertion sort func", () => {
    expect(insertionSort(inputData)).toEqual(expectedOutput)
});


// -----------------------
// Whole program behaviour
// -----------------------

jest.mock('readline-sync');

test("Valid bubble test", () => {

    beforeEach(() => {
        jest.spyOn(readline, 'question');
      });
    
      afterEach(() => {
        jest.restoreAllMocks();
      });

    readline.question
        .mockReturnValueOnce("5")
        .mockReturnValueOnce("B")
        .mockReturnValueOnce("Y");

    expect(main).toBe(1);
});