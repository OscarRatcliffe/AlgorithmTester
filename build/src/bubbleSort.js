"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bubbleSort = void 0;
function bubbleSort(toSort) {
    var earlyExit = false;
    while (!earlyExit) {
        earlyExit = true;
        for (var i = 0; i < toSort.length; i++) {
            var num1 = toSort[i];
            var num2 = toSort[i + 1];
            if (num1 > num2) {
                toSort[i] = num2;
                toSort[i + 1] = num1;
                earlyExit = false;
            }
        }
    }
    return toSort;
}
exports.bubbleSort = bubbleSort;
module.exports.bubbleSort = bubbleSort;
//# sourceMappingURL=bubbleSort.js.map