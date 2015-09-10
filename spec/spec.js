describe('nonTurnRight', function() {
    it('A turn right should return false', function() {
        /* A turn right shoud return false */
        expect(ccw({x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0})).toEqual(false);
    });

    it('A turn left should return true', function() {
        /* A turn left should return true */
        expect(ccw({x: 0, y: 0}, {x: 0, y: 1}, {x: -1, y: 0})).toEqual(true);
    });

    it('A non turn should return true', function() {
        /* A non turn should return true */
        expect(ccw({x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2})).toEqual(true);
    });
});

describe('Find pivot index', function() {
   it('Should find the only minimum y value', function() {
        var points = [
            {x: 21, y: 61}, /* 0 */
            {x: 90, y: 89}, /* 1 */
            {x: 84, y: 48}, /* 2 */
            {x: 49, y: 30}, /* 3 */
            {x: 14, y: 25}, /* 4 */
            {x:  3, y: 21}, /* 5 */
            {x: 95, y: 75}  /* 6 */
        ];
       expect(findPivot(points)).toEqual(5);
   });

   it('Should return the x min value in case of duplicate y min value', function() {
        var points = [
            {x: 21, y: 61}, /* 0 */
            {x: 90, y: 89}, /* 1 */
            {x: 84, y: 48}, /* 2 */
            {x: 49, y: 30}, /* 3 */
            {x: 14, y: 25}, /* 4 */
            {x:  3, y: 21}, /* 5 */
            {x:  2, y: 21}, /* 6 */
            {x: 95, y: 75}  /* 7 */
        ];
       expect(findPivot(points)).toEqual(6);
   });
});

describe('Swap pivot', function() {
    it('It should move the pivot to the position 0 of the index', function() {
        var points = [
            {x: 21, y: 61}, /* 0 */
            {x: 90, y: 89}, /* 1 */
            {x: 84, y: 48}, /* 2 */
            {x: 49, y: 30}, /* 3 */
            {x: 14, y: 25}, /* 4 */
            {x:  3, y: 21}, /* 5 */
            {x:  2, y: 21}, /* 6 */
            {x: 95, y: 75}  /* 7 */
        ];

        var result = [
            {x:  2, y: 21}, /* 0 */
            {x: 90, y: 89}, /* 1 */
            {x: 84, y: 48}, /* 2 */
            {x: 49, y: 30}, /* 3 */
            {x: 14, y: 25}, /* 4 */
            {x:  3, y: 21}, /* 5 */
            {x: 21, y: 61}, /* 6 */
            {x: 95, y: 75}  /* 7 */
        ];
        swapPivot(points);
        expect(points).toEqual(result);
    });
});

describe('compare points by pivot', function() {
    it('Compare two points by polar angle to pivot <y', function() {
        var pivot = {x: 4, y: 1};
        var a     = {x: 7, y: 2};
        var b     = {x: 3, y: 8};

        expect(comparePolarAngle(pivot, a, b)).toEqual(true);
    });

    it('Compare two points by polar angle to pivot <x', function() {
        var pivot = {x: 1, y:  1};
        var a     = {x: 2, y:  0};
        var b     = {x: 2, y: -1};
        expect(comparePolarAngle(pivot, a, b)).toEqual(false);
    });

    it('If two points when theres a same y value', function() {
        var pivot = {x: 6, y: 3};
        var a     = {x: 2, y: 7};
        var b     = {x: 7, y: 3};

        expect(comparePolarAngle(pivot, a, b)).toEqual(false);
    });

    it('Compare when there are same x value', function() {
        var pivot = {x: 0, y: 0};
        var a     = {x: 1, y: 0};
        var b     = {x: 0, y: 1};
        expect(comparePolarAngle(pivot, a, b)).toEqual(true);
    });
});

describe('Sort by polar angle and pivot', function() {
    var points = [
        {x: 5,y: 3},
        {x: 2,y: 7},
        {x: 8,y: 9},
        {x: 6,y: 5},
        {x: 9,y: 5}
    ];

    var result = [
        {x: 5,y: 3},
        {x: 9,y: 5},
        {x: 8,y: 9},
        {x: 6,y: 5},
        {x: 2,y: 7}
    ];
    sortPoints(points);
    it('should order the pivot and the points', function() {
        expect(points).toEqual(result);
    });
});
