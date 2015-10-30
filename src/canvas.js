var canvas = document.getElementById('canvas');
var width = canvas.width;
var height = canvas.height;
var context = canvas.getContext('2d');

function drawPoint(context, point, radius, color) {
    /* Optional arguments */
    radius = radius || 3;
    color = color || '#00F';

    /* Draw the line */
    context.beginPath();
    context.arc(point.x, height - point.y, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "#00F";
    context.fill();
}

function drawLine(context, point_1, point_2, color) {
    /* Optional arguments */
    color = color || 'red';

    /* Draw a line */
    context.beginPath();
    context.moveTo(point_1.x, height - point_1.y);
    context.lineTo(point_2.x, height - point_2.y);
    context.strokeStyle = color;
    context.stroke();
}

function drawPoints(context, points) {
    for (var i = 0; i < points.length; i++) {
        drawPoint(context, points[i]);
    }
}

function drawLines(context, points) {
    for (var i = 1; i < points.length; i++) {
        drawLine(context, points[i-1], points[i]);
    }
    drawLine(context, points[points.length - 1], points[0]);
}

function findEdges(points) {
    var x_min = x_max = points[0].x;
    var y_min = y_max = points[0].y;

    for (var i = 1; i < points.length; i++) {
        if (points[i].x < x_min) x_min = points[i].x;
        if (points[i].x > x_max) x_max = points[i].x;
        if (points[i].y < y_min) y_min = points[i].y;
        if (points[i].y > y_max) y_max = points[i].y;
    }

    return [{x: x_min, y: y_min}, {x: x_max, y: y_max}];
}

function normalizePoints(points, border_offset) {
    border_offset = border_offset || 10;
    var edges = findEdges(points);
    var result = [];

    var x_ratio =  width  / (Math.abs(edges[1].x) - Math.abs(edges[0].x) + border_offset);
    var y_ratio =  height / (Math.abs(edges[1].y) - Math.abs(edges[0].y) + border_offset);
    var ratio = (x_ratio > y_ratio) ? y_ratio : x_ratio;

    var x_offset = -(edges[0].x * ratio) + border_offset / 2;
    var y_offset = -(edges[0].y * ratio) + border_offset / 2;

    for (var i = 0; i < points.length; i++) {
        result.push({x: Math.floor(points[i].x * ratio + x_offset), y: Math.floor(points[i].y * ratio + y_offset)});
    }

    return result;
}
