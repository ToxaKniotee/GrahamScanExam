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
