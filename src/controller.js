var app = angular.module('app', []);
app.controller('GrahamScan', function($scope) {
    $scope.points = [];

    $scope.addPointScope = function() {
        $scope.points.push({x: parseInt($scope.x), y: parseInt($scope.y)});
        $scope.x = '';
        $scope.y = '';
    };

    $scope.removePoint = function(index) {
        $scope.points.splice(index, 1);
    };
});

function addPoint() {
    var $scope = angular.element(document.getElementById('body')).scope();
    $scope.addPointScope();
    if ($scope.points.length > 2) {
        deleteCanvas();
        var points = $scope.points;
        var normal_points = normalizePoints($scope.points);
        drawPoints(normal_points);
        drawLines(grahamScan(normal_points));
    }
}

function removePoint(index) {
    var $scope = angular.element(document.getElementById('body')).scope();
    if ($scope.points.length > 2) {
        deleteCanvas();
        var normal_points = normalizePoints($scope.points);
        drawPoints(normal_points);
        drawLines(grahamScan(normal_points));
    }
}
