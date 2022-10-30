// Questions will be asked
const Questions = [{
		id: 0,
		q: "Inside which HTML element do we put the JavaScript?",
		a: [{ text: "<script>", isCorrect: true },
			{ text: "<javascript>", isCorrect: false },
			{ text: "<js>", isCorrect: false },
			{ text: "<scripting>", isCorrect: false }
		]

	},
	{
		id: 1,
		q: "Where is the correct place to insert a JavaScript?",
		a: [{ text: "The <body> section  ", isCorrect: false, isSelected: false },
			{ text: "Both the <head> section and the <body> section are correct  ", isCorrect: true },
			{ text: "The <head> section", isCorrect: false },
			{ text: "All the above", isCorrect: false }
		]

	},
	{
		id: 2,
		q: "What is the correct syntax for referring to an external script called ''xxx.js''?",
		a: [{ text: "<script name=''xxx.js''>", isCorrect: false },
			{ text: "vadodara<script href=''xxx.js''>", isCorrect: false },
			{ text: "<script src=''xxx.js''>", isCorrect: true },
			{ text: "All the above", isCorrect: false }
		]

	},
	
		{
		id: 3,
		q: "The external JavaScript file must contain the <script> tag.",
		a: [{ text: "True", isCorrect: false, isSelected: false },
			{ text: "False", isCorrect: true }
		]

	},
	
		{
		id: 4,
		q: "How do you create a function in JavaScript?",
		a: [{ text: "function = myFunction() ", isCorrect: false, isSelected: false },
			{ text: "function myFunction()  ", isCorrect: true },
			{ text: "function:myFunction()", isCorrect: false },
			{ text: "All the above", isCorrect: false }
		]

	},
	
		{
		id: 5,
		q: "How to write an IF statement in JavaScript?",
		a: [{ text: "if i = 5 then", isCorrect: false, isSelected: false },
			{ text: "if (i == 5)", isCorrect: true },
			{ text: "if i == 5 then", isCorrect: false },
			{ text: "All the above", isCorrect: false }
		]

	},
	
			{
		id: 6,
		q: "How does a WHILE loop start?",
		a: [{ text: "while (i <= 10; i++)", isCorrect: false, isSelected: false },
			{ text: "while (i <= 10) ", isCorrect: true },
			{ text: "while i = 1 to 10", isCorrect: false },
			{ text: "All the above", isCorrect: false }
		]

	},
			{
		id: 7,
		q: "How does a FOR loop start??",
		a: [{ text: "for (i <= 5; i++)", isCorrect: false, isSelected: false },
			{ text: "for (i = 0; i <= 5; i++)", isCorrect: true },
			{ text: "for i = 1 to 5", isCorrect: false },
			{ text: "All the above", isCorrect: false }
		]

	},
			{
		id: 8,
		q: "How can you add a comment in a JavaScript?",
		a: [{ text: "<!--This is a comment-->", isCorrect: false, isSelected: false },
			{ text: "//This is a comment", isCorrect: true },
			{ text: "'This is a comment", isCorrect: false },
			{ text: "All the above", isCorrect: false }
		]

	},
			{
		id: 9,
		q: "How do you round the number 7.25, to the nearest integer?",
		a: [{ text: "rnd(7.25)  ", isCorrect: false, isSelected: false },
			{ text: "Math.round(7.25)  ", isCorrect: true },
			{ text: "Math.rnd(7.25)", isCorrect: false },
			{ text: "All the above", isCorrect: false }
		]

	},
			{
		id: 10,
		q: "JavaScript is the same as Java",
		a: [{ text: "True", isCorrect: false, isSelected: false },
			{ text: "False", isCorrect: true }
		]

	}
	
]

// Set start
var start = true;

// Iterate
function iterate(id) {

	// Getting the result display section
	var result = document.getElementsByClassName("result");
	result[0].innerText = "";

	// Getting the question
	const question = document.getElementById("question");


	// Setting the question text
	question.innerText = Questions[id].q;

	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');


	// Providing option text
	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;

	// Providing the true or false value to the options
	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;

	var selected = "";

	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "lightgoldenrodyellow";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightgoldenrodyellow";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightskyblue";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightgoldenrodyellow";
		op4.style.backgroundColor = "lightskyblue";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "lightskyblue";
		op2.style.backgroundColor = "lightskyblue";
		op3.style.backgroundColor = "lightskyblue";
		op4.style.backgroundColor = "lightgoldenrodyellow";
		selected = op4.value;
	})

	// Grabbing the evaluate button
	const evaluate = document.getElementsByClassName("evaluate");

	// Evaluate method
	evaluate[0].addEventListener("click", () => {
		if (selected == "true") {
			result[0].innerHTML = "True";
			result[0].style.color = "green";
		} else {
			result[0].innerHTML = "False";
			result[0].style.color = "red";
		}
	})
}

if (start) {
	iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
	start = false;
	if (id < 11) {
		id++;
		iterate(id);
		console.log(id);
	}

})
