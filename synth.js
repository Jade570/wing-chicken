//kick: https://freesound.org/people/DWSD/sounds/171104/
//snare: https://freesound.org/people/alexthegr81/sounds/320870/
let kick = new Tone.Player("./assets/kick.wav",{
	"volume":{
		"value" : -50
	}

}).toMaster();
let snare = new Tone.Player("./assets/snare.wav",{
	"volume":{
		"value" : -50
	}	
}).toMaster();
let bass = [robots];
let melody = [robots];

bass[0] = new Tone.MonoSynth({
	"oscillator" : {
		"type" : "square4"
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
		"type" : "sawtooth3"
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

melody[0] = new Tone.PolySynth(2, Tone.Synth, {
  oscillator : {
  type : "square1"
},
  filter : {
    type: "lowshelf",
    frequency : 300
  }
}).toMaster();

melody[1] = new Tone.PolySynth(2, Tone.Synth,{
  filter : {
    type: "lowshelf",
    frequency : 300
  }
}).toMaster();

melody[2] = new Tone.PolySynth(2, Tone.Synth, {
  oscillator : {
  type : "sawtooth3"
},
filter : {
  type: "lowpass",
  frequency : 200
}
}).toMaster();
