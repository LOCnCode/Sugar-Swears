
var swears = { 
	levelOne: {
			family: [
				"Sugar Puffs!",
				"Leapin' Lizards!",
				"Snickerdoodle!",
				"Jimminy Cricket!"
			],
			coWorkers: [
				"What in the blue blazes!",
				"Crud!",
				"Frazzlin!"
			],
			god: [
				"Holy maccaroni!",
				"Holy Guacamole!",
				"Golly!",
				"Holy Cow!"
			]
		},

	levelTwo: {
		family: [
			"Cheese and Crackers!",
			"Oh Fudge!",
			"Sugar!",
			"What the what!"
		],
		coWorkers: [
			"Crapola!",
			"Blimey!",
			"Barbara Streisand!",
			"Dagnabbit!",
			"Gadzooks!"
		],
		god: [
			"Great Holy ghost!",
			"Heavens to Betsy!",
			"Godzooks!"
		]
	}, //Level two object ends

	levelThree: {
		family: [
			"Dadgummit!",
			"Don't give a Donald Duck!",
			"Son of a gun!",
			"Son of a turkey fart!",
			"Son of a nutcracker!",
			"Son of a seahorse!"
		],
		coWorkers: [
			"Shuzbutt!",
			"Crap!",
			"Bull hockey!",
			"Helicopter!"
		],
		god: [
			"Jumpin Jahosaphat!",
			"Jeez Louise!",
			"Great Holy ghost!"
		]
	}  //level three object ends
}; //SWEARS Object ENDS


var finalChoice = "";

$( function() {

	$(".sugarForm").on("submit", function(e) {
		e.preventDefault();

		var levelChoice = $("input[name=angerLevel]:checked").val(); // levelOne, levelTwo, or levelThree
		var audienceChoice = $("input[name=audience]:checked").val(); // family, coWorkers, or god
		// console.log(levelChoice, audienceChoice);
		var usersChoice = swears[levelChoice][audienceChoice]; // e.g swears["levelOne"]["family"]
		// console.log(usersChoice);
		
		finalChoice = getRandomElementFromArray(usersChoice);

			// console.log(finalChoice);
			$(".results").html(`<h2 class="choice choice-appears">${finalChoice}</h2>`);

			runSlots(finalChoice);
	
	}); //END OF SUBMIT


	function getRandomElementFromArray(array) {
		var randomNumber = Math.floor(Math.random() * array.length);
		return array[randomNumber];
	}

	 $('.box').click(function(){
		 if($('.active').length){
			$('.active').not($(this)).removeClass('active').addClass('box');
		}      
			$(this).removeClass('box').addClass('active');     
}); 

  $('.box2').click(function(){
	 if($('.active2').length){
		$('.active2').not($(this)).removeClass('active2').addClass('box2');
	}      
		$(this).removeClass('box2').addClass('active2');     
}); 

	//GAME JS ENDS HERE

	function runSlots() {

		var slotOne;
		var slotTwo;
		var slotThree;

		var images = [
			"images/lolly-turq.png", /*"images/redicecream.png",*/ "images/donut-pinksprinkle.png", "images/cake-stripped.png"
		];

		slotOne = images[Math.floor(Math.random()*images.length)];
		slotTwo = images[Math.floor(Math.random()*images.length)];
		slotThree = images[Math.floor(Math.random()*images.length)];

		if (slotOne === slotTwo && slotTwo === slotThree && slotThree === slotOne) {
			// console.log("You Win!");
			return {
				message: "Winner!",
				images: [slotOne, slotTwo, slotThree]
			} 

		} else {
			return {
				message: "You Lost!",
				images: [slotOne, slotTwo, slotThree]
			};
		};
		
	};//END OF FUNCTION

$(".go").on("click", function() {
	var slotsResults = runSlots();
	// console.log(slotsResults);
	if(slotsResults.message === "Winner!"){
		$(".resultsContainer").html(`<h2 class="choice choice-appears">${slotsResults.message}</h2>`);
	} else {
		$(".resultsContainer").html(`<h2 class="choice choice-appears">${finalChoice} ${slotsResults.message}</h2>`);
	}
		$('.slotContainer').empty();

	slotsResults.images.forEach(function(image){
		var slotInset = $("<div class='slotInset'>");
		slotInset.append(`<img src="${image}" alt="" />`);
		$(".slotContainer").append(slotInset);
	});

}); //END OF SLOTMACHINE SUBMIT


}); //DOC READY ENDS




