function bubbleSort(toSort: Array<number>): Array<number> {
    var earlyExit: boolean = false;
    while(!earlyExit) {

        earlyExit = true;

        for (var i = 0; i < toSort.length; i++) {
            var num1: number = toSort[i];
            var num2: number = toSort[i+1];

            if (num1 > num2) {
                toSort[i] = num2;
                toSort[i+1] = num1;
                earlyExit = false;
            }
        }
    }
    return toSort
}

module.exports.bubbleSort = bubbleSort;