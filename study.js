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
}
function interfaceTest(argObj) {
    if (argObj === void 0) { argObj = { a: 3, b: "xyz" }; }
    document.getElementById('test').innerHTML += "<br>a: " + argObj.a + "<br>b: " + argObj.b;
}
