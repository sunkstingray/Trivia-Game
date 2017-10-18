// Initialize global variables

var q;
var counter = -1;
var number = 30;
var timerId;
var radioButton;
var selectedAnswer;
var rightCount = 0;
var wrongCount = 0;
var timeCount = 0;



// Trivia questions

var trivaQuestions = 
	[
		{
			question: "When does Mary Poppins say she will leave the Banks' house?",
			choices: ["When the time is right.", "When the wind changes.", "When it rains.", "When a new nanny comes."],
			answer: 1,
			gif: "assets/images/mary-poppins.gif"
		},

		{
			question: "In the begining of the movie Dumbo, they zoom in on a map of the US to the state where the circus goes for the winter, what state do they zoom in on?",
			choices: ["Florida", "New York", "Kansas", "California"],
			answer: 0,
			gif: "assets/images/dumbo-florida.gif"
		},

		{
			question: "In the Rescuers, where is the Rescue Aid Society headquarters located?",
			choices: ["The US Capitol Building", "The New York Library", "The United Nations Building", "Big Ben"],
			answer: 2,
			gif: "assets/images/rescuers.gif"
		},

		{
			question: "What does the enchanted cake in Brave turn Merida's mother into?",
			choices: ["A frog", "A cat", "A bear", "A dog"],
			answer: 2,
			gif: "assets/images/brave.gif"
		},

		{
			question: "What U.S. city is the setting of The Princess and The Frog inspired by?",
			choices: ["Atlanta", "New York", "Nashville", "New Orleans"],
			answer: 3,
			gif: "assets/images/frog.gif"
		},

		{
			question: "What is the name of Mulan’s pet dragon?",
			choices: ["Mushu", "Li Shang", "Huns", "Fa Zhou"],
			answer: 0,
			gif: "assets/images/mushu.gif"
		},

		{
			question: "What is the name of the Disney cartoon character that is the girlfriend to Donald Duck?",
			choices: ["Diana Duck", "Daisy Duck", "Debbie Duck", "Dutchess Duck"],
			answer: 1,
			gif: "assets/images/daisy.gif"
		},

		{
			question: "In Disney's The Little Mermaid what is the name of the human that Ariel falls in love with?",
			choices: ["Prince Caspian", "Prince Charming", "Prince Eric", "Prince John"],
			answer: 2,
			gif: "assets/images/eric.gif"
		},

		{
			question: "What are the names of the three fairies in the Disney classic Sleeping Beauty?",
			choices: ["Flo, Jo, and Stephanie", "Flora, Fauna and Merryweather", "Humble, Bumble, and Jolly", "Merry, Ferry, and Constance"],
			answer: 1,
			gif: "assets/images/sleeping.gif"
		},

		{
			question: "What is the name of Mickey Mouse´s dog?",
			choices: ["Pluto", "Spot", "Fluffy", "George"],
			answer: 0,
			gif: "assets/images/pluto.gif"
		}


	];



// Function to show start button

function startButton() {

	$("#time").html("Click the button below to start playing!");
	
	$(".start").on("click", function(){
	startQuiz();
});

}

// Function to start the trivia quiz

function startQuiz() {
	console.log("0");
	$(".reset").hide();
	counter++;

	q = trivaQuestions[counter];

	if (counter < trivaQuestions.length){

		console.log("1");

		timerId = setInterval(decrement, 1000);

		$("#question").html(q.question+"<br>"+rB());

		$('input:radio').change(function(){
	        console.log("changed");
	        selectedAnswer = this.value;  
	        checkAnswer();
	    }); 
	}

	else {
		console.log("13");
		quizOver();
	}

}



// Function to create radio buttons for each question

function rB(){

	radioButton = "";
	console.log(q.choices.length);

	for (var i = 0; i < q.choices.length; i++) {
	radioButton += "<br><label><input type='radio' name='triviaQuestion' value='" + i + "' /> " + q.choices[i] + "</label>"
	}

	return radioButton;
}



// Function to decrement the timer

function decrement() {

	console.log("2");

	number--;

	$("#time").html("Time Remaining: " + number + " seconds");

	if (number === 0) {

		console.log("3");

		$("#time").html("Time is up! The correct answer was: "+q.choices[q.answer]);
		$("#question").html("<img src = '"+q.gif+"'>");
		stop();
		timeCount++;
	}
}



// Funtion to stop and reset the timer

function stop(){
	console.log("4");
	clearInterval(timerId);
	number = 30;
	setTimeout(startQuiz, 1000*4);
}



// Funtion to check to see if the answer is right or wrong

function checkAnswer(){

	console.log("5");

	if (selectedAnswer == q.answer){

		console.log("6");

		$("#time").html("Well Done! You got it right!");
		$("#question").html("<img src = '"+q.gif+"'>");
		rightCount++;
		stop();
	}

	else if (selectedAnswer != q.answer){
		$("#time").html("Sorry, the correct answer was: "+q.choices[q.answer]);
		$("#question").html("<img src = '"+q.gif+"'>");
		wrongCount++;
		stop();
	}
}



// Function the displays the results at the end of the quiz

function quizOver(){
	$("#time").html("Let's see how you've done...");
	$("#question").html("<div>Right Answers: "+rightCount+"</div><div>Wrong Answers: "+wrongCount+"</div><div>Questions that timed out: "+timeCount+"</div><div><img src='assets/images/ProfessorOwl-sm.gif'></div>");
	$(".reset").show();
}



// Click listener for the button to restart the quiz

$(".reset").on("click", function(){
	number = 30;
	counter = -1;
	rightCount = 0;
	wrongCount = 0;
	timeCount = 0;
	startQuiz();
});



// Calling the function to listen for the button to start the quiz

startButton();