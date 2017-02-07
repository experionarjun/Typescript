var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function greeter(person) {
    return "Hello, " + person;
}
var user = "Arjun";
document.getElementById('hello').innerHTML = greeter(user);
var x = 10;
var y = 10;
function l00p() {
    for (var x = 0; x < 3; x++) {
        console.log("inside", x);
    }
    console.log("outside", x);
    var Color;
    (function (Color) {
        Color[Color["Red"] = 1] = "Red";
        Color[Color["Green"] = 2] = "Green";
        Color[Color["Blue"] = 3] = "Blue";
    })(Color || (Color = {}));
    ;
    var colorName = Color[2];
    var color = Color.Green;
    console.log(colorName, color);
    var test = {
        a: 2, b: "hi"
    };
    interfaceTest(test);
    interfaceTest();
    var mySquare = createSquare({ color: "blue" });
    document.getElementById('test').innerHTML += "<br>" + mySquare.color + mySquare.area;
    var sq = createSquare({ color: "green", width: 600 });
    document.getElementById('test').innerHTML += "<br>" + sq.color + sq.area;
}
function interfaceTest(argObj) {
    if (argObj === void 0) { argObj = { a: 3, b: "xyz" }; }
    document.getElementById('test').innerHTML += "<br>a: " + argObj.a + "<br>b: " + argObj.b;
}
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (dist) {
        if (dist === void 0) { dist = 0; }
        console.log(this.name + " moved " + dist + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (dist) {
        if (dist === void 0) { dist = 5; }
        _super.prototype.move.call(this, dist);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (dist) {
        if (dist === void 0) { dist = 45; }
        _super.prototype.move.call(this, dist);
    };
    return Horse;
}(Animal));
var pam = new Snake("Pambhu");
var kuth = new Horse("Kuthira");
var aliya = new Animal("Aliya");
aliya.move();
pam.move();
kuth.move(34);
