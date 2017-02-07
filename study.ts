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
}




function interfaceTest (argObj :obj = {a:3, b:"xyz" }) {

		document.getElementById('test').innerHTML += "<br>a: "+argObj.a + "<br>b: "+argObj.b;
    
}