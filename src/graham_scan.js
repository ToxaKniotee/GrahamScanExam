/**
 * Return false if the three points describe a cloclwise turn
 * @param  {Point} p1
 * @param  {Point} p2
 * @param  {Point} p3
 * @return {bool }    false if cw turn, true if ccw or linear
 */
function ccw(p1, p2, p3) {
    var difference = (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
    return (difference >= 0) ? true : false;
}

function findPivot(points) {
    /* y variables */
    var y_min = points[0].y,
        y_index = 0,
        y_count = 0;

    /* x variables */
    var x_min = points[0].x,
        x_index = 0,
        x_count = 0;

    for (var i = 1; i < points.length; i++) {
        if (points[i].y == y_min) {
            y_count++;
        } else if (points[i].y < y_min) {
            y_min = points[i].y;
            y_count = 0;
            y_index = i;
        }

        if (points[i].x == x_min) {
            x_count++;
        } else if (points[i].x < x_min) {
            x_min = points[i].x;
            x_count = 0;
            x_index = i;
        }
    }

    if (y_count == 0) return y_index;
    return x_index;
}

function swapPivot(points) {
    var pivot_index = findPivot(points);
    var temp = points[0];
    points[0] = points[pivot_index];
    points[pivot_index] = temp;
}

/**
 * Chech if a < b based on polar angle with pivot
 * @param  {Point} pivot
 * @param  {Point} a
 * @param  {Point} b
 * @return {bool } true if a < b else false
 */
function comparePolarAngle(pivot, a, b) {
    return !ccw(a, pivot, b);
}

function sortPoints(points) {
    swapPivot(points);

    var pivot = points[0];
    var middle = Math.floor(points.length / 2),
        left = points.slice(1, middle),
        right = points.slice(middle)
        params = merge(pivot, mergeSort(pivot, left), mergeSort(pivot, right));

    var result = [pivot];
    result = result.concat(params);

    result.unshift(0, points.length);
    points.splice.apply(points, result);
}

function mergeSort(pivot, points) {
    if (points.length < 2) return points;

    var middle = Math.floor(points.length / 2),
        left = points.slice(0, middle),
        right = points.slice(middle)
        params = merge(pivot, mergeSort(pivot, left), mergeSort(pivot, right));

    return params;
}

function merge(pivot, left, right) {
    var result = [],
        ir = 0,
        il = 0;

    while (il < left.length && ir < right.length) {
        if (comparePolarAngle(pivot, left[il], right[ir])) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }

    return result.concat(left.slice(il)).concat(right.slice(ir));
}

function grahamScan(points) {
    var stack = [];

    /* Sorth the points */
    sortPoints(points);

    /* Get the pivot */
    var pivot = points[0];

    /* Insert the first 2 points in the stack */
    stack = stack.concat(points.slice(0, 2));

    for (var i = 2; i < points.length; i++) {
        var p1 = stack[stack.length - 2];
        var p2 = stack[stack.length - 1];
        var p3 = points[i]

        if (ccw(p1, p2, p3)) {
            stack.push(p3);
        } else {
            stack.pop();
            i--;
        }
    }

    return stack;
}
