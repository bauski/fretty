class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

var foo = {
    a: 5,
    b: function() {
        return this.a;
    }
}

const bar = new Rectangle(5,10);

export { Rectangle, foo};
