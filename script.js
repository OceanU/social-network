var database = [
	{
	username: "ion",
	password: "secret",	
	},
	{
	username: "rox",
	password: "pass",	
	},
	{
	username: "ghe",
	password: "ceva",	
	}
];

var newsFeed = [
		{
			username: "Iulianus",
			timeline: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
		},
		{
			username: "Gina",
			timeline: "Vrei sa aflii secretul femeilor independente si pline de bani ? "
		},
		{
			username: "Latrina 3",
			timeline: "A murit ! Vezi ce spune apropiatii !!!"
		},
		{
			username: "Ghita",
			timeline: "A dat unu cu viteza. Da click AICI !"
		},
		{
			username: "Domn' Presedinte Vadim",
			timeline: "Nu faci tu ordine la Vadim in birou somaltoaca dracului !!!  "
		}
	];


var input = document.getElementById("username");
var password = document.getElementById("password");
var button = document.getElementById("enter");
var userLog = input.value;
var passLog = password.value;


// alert("Welcome to Facebook");
// var userLog = prompt("What is your username ?") 
// var passLog = prompt("What is your password ?")


function isUserValid(user,pass) {
	var user = input.value;
	var pass = password.value;
	for (var i=0; i< database.length; i++) {
		if (user === database[i].username && pass === database[i].password) {
		return true;
		}
	}
  return false;	
}

function signIn (user,pass) {	
		if (isUserValid(user, pass) === true) {
			alert("Welcome to Facebook!");
				newsFeed.map(obj => {
					alert(Object.entries(obj).map(value => value[1]).join('\n'));
					console.log(Object.entries(obj).map(value => value[1]).join('\n'));
				});
		} else {
		alert("Wrong username or password !")
	}
}	


// }		
// incerc ca rezultatele sa fie introduse intr-un array pt ca 
// array-urile sa fie alertate sau console.log cate 2


button.addEventListener("click", signIn);



// o functie ce logheaza 2 spatii libere la fiecare string
// const logString = () => {
//   let counter = 0;
//   return (outputString) => {
//     while (counter % 3 !== 0) {
//       counter ++;
//       console.log('\n');
//     }
//     console.log(outputString);
//     counter++;
//   }
// }

// const loggerFunc = logString();

// loggerFunc('Hello');
// loggerFunc('World');
// loggerFunc('What');
// loggerFunc('Up?');


//functia asta chiar face ce trebuie 
// const logString = () => {
//   let counter = 0;
//   return (outputString) => {
//     while (!(counter % 3 == 0 || counter % 3 == 1)) {
//       counter++;
//       console.log('');
//     }
//     console.log(outputString);
//     counter++;
//   }
// }

// const loggerFunc = logString();

// loggerFunc('Hello');
// loggerFunc('World');
// loggerFunc('What');
// loggerFunc('Up?');
// loggerFunc('But');
// loggerFunc('Why?');
// loggerFunc("I'm drunk");
// loggerFunc('So');
// loggerFunc('How');
// loggerFunc('Could');
// loggerFunc('I');
// loggerFunc('Understand?')