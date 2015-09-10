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
