const {bubbleSort, insertionSort, main} = require('../build/bundle')

// ------------------
// Sorting algorithms 
// ------------------

test("Bubble sort func", () => {
    // expect(bubbleSort)([92, 86, 58, 35, 13])).toBe([13, 35, 58, 86, 92];
    expect(bubbleSort([92, 86, 58, 35, 13])).toEqual([13, 35, 58, 86, 92])
});

test("Insertion sort func", () => {
    // expect(bubbleSort)([92, 86, 58, 35, 13])).toBe([13, 35, 58, 86, 92];
    expect(insertionSort([92, 86, 58, 35, 13])).toEqual([13, 35, 58, 86, 92])
});


// -----------------------
// Whole program behaviour
// -----------------------

