
// Each different note is save to a string
var s1 = new Audio('https://josetxu.com/html5/guitar-tuner/audio/s1.mp3');
var s2 = new Audio('https://josetxu.com/html5/guitar-tuner/audio/s2.mp3');
var s3 = new Audio('https://josetxu.com/html5/guitar-tuner/audio/s3.mp3');
var s4 = new Audio('https://josetxu.com/html5/guitar-tuner/audio/s4.mp3');
var s5 = new Audio('https://josetxu.com/html5/guitar-tuner/audio/s5.mp3');
var s6 = new Audio('https://josetxu.com/html5/guitar-tuner/audio/s6.mp3');
// Function that gets element by its ID, by taking it as an ID
function elem(id){
	var element = document.getElementById(id);
	return element;
}
// Function that lets user select a string 
function pickString(thisString){
	if(pick == true) clickString(thisString);
}
// Function hat when a string is selected its note & sound lights up for a set time
function clickString(thisString) {
	elem('title').className='imgTitle';
	elem(thisString).className = "string";
	window[thisString].currentTime = 0;
	window[thisString].play();
	var thisNote = thisString+"Note";
	elem(thisString).className = "string playingSound";
	elem(thisNote).className = "lightOn";
	setTimeout(function(){ 		
		if(window[thisString].loop != true){
			elem(thisString).className = "string";
			elem(thisNote).className = "lightOff";
			if(document.querySelectorAll('.playingSound').length==0){
				elem('title').className='';
			}
		}
	}, 4500);
}
// Function that holds the sound(s) that's being played 
function holdSound(){
	if(s1.loop != true){
		s1.loop = s2.loop = s3.loop = s4.loop = s5.loop = s6.loop = true;
		elem('buttHold').className = "active";
	} else {
		s1.loop = s2.loop = s3.loop = s4.loop = s5.loop = s6.loop = false;
		elem('buttHold').className = "inactive";
		s1.pause(); s2.pause(); s3.pause(); s4.pause(); s5.pause(); s6.pause();	
		stopStrings();
	}
}
// Function that stops all audio from the guitar
function stopStrings(){
	elem('title').className='';
	s1.pause(); s2.pause(); s3.pause(); s4.pause(); s5.pause(); s6.pause();
	var auxString = document.querySelectorAll('.playingSound');	
	for (var x in auxString) {
		if(auxString[x]!==undefined){
			auxString[x].className = "string";
		}
	}
	// Decides which  string should light up
	var auxNote = document.querySelectorAll(".lightOn");
	for (x in auxNote) {
		if(auxNote[x]!==undefined){
			auxNote[x].className = "lightOff";
		}
	}
}
// Function that allows user to use a guitar pick
function usePick(){
	var x = elem('buttPick').className;
	if(x == 'inactive'){
		elem('buttPick').className = 'active';
		pick = true;
		elem("guitarBody").className = 'pickActive';	
	} else {
		elem('buttPick').className = 'inactive';
		pick = false;
		elem("guitarBody").className = '';	
	}
}
// On load function that plays the 3rd string
(function() {
	setTimeout(function(){ 		
		clickString('s3');
	}, 500);
})();