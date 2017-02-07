function greeter(person) {
    return "Hello, " + person;
}

var user = "Arjun";

document.getElementById('hello').innerHTML = greeter(user);

let x:number = 10;
var y = 10;

interface obj {
	a : number;
	b : string;
}

function l00p(){
	for (var x = 0; x < 3; x++) {
		console.log("inside",x);
	}
	console.log("outside",x);
	enum Color {Red = 1, Green, Blue};
	let colorName: string = Color[2];
	let color:number = Color.Green; 
	console.log(colorName,color);
	let test : obj = {
		a:2, b:"hi"
	}
	interfaceTest (test);
	interfaceTest ();	
	let mySquare = createSquare({color: "blue"});
	document.getElementById('test').innerHTML += "<br>"+mySquare.color + mySquare.area;

	let sq = createSquare({color: "green", width: 600});
	document.getElementById('test').innerHTML += "<br>"+sq.color + sq.area;
}




function interfaceTest (argObj :obj = {a:3, b:"xyz" }) {

		document.getElementById('test').innerHTML += "<br>a: "+argObj.a + "<br>b: "+argObj.b;
    
}



interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
       
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

class Animal {
    name: string;
    constructor(name: string) { this.name = name; }
    move(dist: number = 0) {
        console.log(`${this.name} moved ${dist}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(dist = 5) {
        super.move(dist);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(dist = 45) {  
        super.move(dist);
    }
}

let pam = new Snake("Pambhu");
let kuth: Animal = new Horse("Kuthira");
let aliya = new Animal("Aliya");

aliya.move();
pam.move();
kuth.move(34);