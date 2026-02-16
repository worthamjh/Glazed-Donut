const add = (x,y) => x+y;

const Pi = 3.14

const square = x => x*x;

// module.exports.add = add;
// module.exports.square = square;
// module.exports.Pi = Pi;
// ANOTHER WAY TO WRITE THE ABOVE

const math = {
    add: add,
    Pi: Pi,
    square: square
}
module.exports = math;