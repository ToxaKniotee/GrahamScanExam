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
