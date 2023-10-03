function insertionSort (toSort: Array<number>): Array<number> {
    var sortedArray: Array<number> = [];
    for (let i = 0; i < toSort.length; i++) {
        
        sortedArray.unshift(toSort[i]);

        for (var j = 0; j < sortedArray.length; j++) {
            var num1: number = sortedArray[j];
            var num2: number = sortedArray[j+1];

            if (num1 > num2) {
                sortedArray[j] = num2;
                sortedArray[j+1] = num1;
            }
        }
    }
    return sortedArray
}