//kick: https://freesound.org/people/DWSD/sounds/171104/
//snare: https://freesound.org/people/alexthegr81/sounds/320870/
let kick = new Tone.Player("./assets/kick.wav").toMaster();
let snare = new Tone.Player("./assets/snare.wav").toMaster();
let bass = [robots];

bass[0] = new Tone.MonoSynth({
	"oscillator" : {
		"type" : "square10"
 },
 "envelope" : {
 	"attack" : 0.1
},
 "filter" : {
   "type" : "lowpass",
   "frequency" : 150
 }
}).toMaster();

bass[1] = new Tone.MonoSynth({
	"oscillator" : {
		"type" : "sawtooth6"
 }

}).toMaster();

bass[2] = new Tone.MonoSynth({
	"oscillator" : {
		"type" : "sawtooth12"
 },
 "envelope" : {
 	"attack" : 0.1
},
"volume":{
  "value" : -1000
},

"filter" : {
  "type" : "lowshelf",
  "frequency" : 350
}
}).toMaster();
