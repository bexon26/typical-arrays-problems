
exports.min = function min (array) {
    if ((array != 0) && (array !== undefined)){
        var min = array[0];
       for (var i=1; i<array.length; i++){
            if (array[i]<min) {
                min = array[i];
            }
        }
       return min;  
    } else {return 0}
}

exports.max = function max (array) {
    if ((array != 0) && (array !== undefined)){
        var max = array[0];
        for (var i=1; i<array.length; i++){
            if (array[i]>max) {
                max = array[i];
            }
        }
        return max;
    } else {return 0}
}
exports.avg = function avg (array) {
    if ((array != 0) && (array !== undefined)){
        var sum = 0;
        for (var i=0; i<array.length; i++){
            sum += array[i];
        }
        var average = sum/array.length
    return average;
    } else {return 0}
}
