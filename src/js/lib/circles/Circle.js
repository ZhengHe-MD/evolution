var util = require('util');

var Individuum = require('../geneticAlgorithm/Individuum');


function Circle() {
    Individuum.call(this);

    this._x = 0;
    this._y = 0;
    this._radius = 0;
}

util.inherits(Circle, Individuum);

Circle.prototype.area = function() {
    return Math.PI * Math.pow(this.getRadius(), 2);
};

Circle.prototype.getX = function() {
    return this._x;
};

Circle.prototype.setX = function(x) {
    this._x = x;

    return this;
};

Circle.prototype.getY = function() {
    return this._y;
};

Circle.prototype.setY = function(y) {
    this._y = y;

    return this;
};

Circle.prototype.getRadius = function() {
    return this._x;
};

Circle.prototype.setRadius = function(radius) {
    this._radius = radius;

    return this._radius;
};

Circle.prototype.recombinate = function(circle) {
    return new Circle()
        .setX(Math.random() < 0.5 ? this.getX() : circle.getX())
        .setY(Math.random() < 0.5 ? this.getY() : circle.getY())
        .setRadius(Math.random() < 0.5 ? this.getRadius() : circle.getRadius());
};

Circle.prototype.mutate = function() {
    var maxMutate = 10;

    var r = Math.random();
    if (r < 0.3) {
        this.setRadius(this.getRadius() + weightedMutate(maxMutate));
    } else if (r < 0.6) {
        this.setRadius(this.getRadius() - weightedMutate(maxMutate));
    }

    r = Math.random();
    if (r < 0.3) {
        this.setX(this.getX() + weightedMutate(maxMutate));
    } else if (r < 0.6) {
        this.setX(this.getX() - weightedMutate(maxMutate));
    }

    r = Math.random();
    if (r < 0.3) {
        this.setY(this.getY() + weightedMutate(maxMutate));
    } else if (r < 0.6) {
        this.setY(this.getY() - weightedMutate(maxMutate));
    }

    function weightedMutate(nr) {
        return parseInt(( 1 - Math.random() * Math.random() ) * nr, 10);
    }
};

module.exports = Circle;