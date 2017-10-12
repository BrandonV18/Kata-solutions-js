// Set a string variable to equal a value
var flavor = prompt("Enter a flavor");

if (flavor ==  "Mint" || flavor == "CottonCandy") {
	alert("Here is your "+flavor+" ice cream boi later");
	}
else if (flavor == "Bananna"){
    alert("Sorry fam we out");
}
function Order () {
	var more = 'yes';
	do {
		OrderMore();
		more = prompt("Would you like anything else to order?");
		}
		while(more == 'yes');
	}
var food = ("What else would you like?");

if (food == "Cheeseburger" || food == "Hamburger" || food == "Hotdog" || food == "BBQ Sandwitch"){
	alert("Enjoy you "+food+" Have a great day!");
	}
else if (food == "Vegan stuff"){
	alert("Nah we dont got that weird stuff");
}
