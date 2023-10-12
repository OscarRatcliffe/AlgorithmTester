"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertionSort = void 0;
function insertionSort(toSort) {
    var sortedArray = [];
    for (let i = 0; i < toSort.length; i++) {
        sortedArray.unshift(toSort[i]);
        for (var j = 0; j < sortedArray.length; j++) {
            var num1 = sortedArray[j];
            var num2 = sortedArray[j + 1];
            if (num1 > num2) {
                sortedArray[j] = num2;
                sortedArray[j + 1] = num1;
            }
        }
    }
    return sortedArray;
}
exports.insertionSort = insertionSort;
module.exports.insertionSort = insertionSort;
//# sourceMappingURL=insertionSort.js.map