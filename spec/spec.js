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
