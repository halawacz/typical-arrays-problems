exports.min = function min(array = [0]) {
    let minimum = Math.min(...array);
    let result = isFinite(minimum) ? minimum : 0;
    return result;
};

exports.max = function max(array = [0]) {
    let maximum = Math.max(...array);
    let result = isFinite(maximum) ? maximum : 0;
    return result;
};

exports.avg = function avg(array = [0]) {
    let average = array.reduce((a, b) => a + b, 0) / array.length;
    let result = isNaN(average) ? 0 : average;
    return result;
};
