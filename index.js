var speechrecog = SpeechRecognition || webkitSpeechRecognition;
var speechgrammer = SpeechGrammarList || webkitSpeechGrammarList;
var grammer  = '#JSGF V1.0;';

var recognition = new speechrecog();
var speechrecoggrammer = new speechgrammer();
speechrecoggrammer.addFromString(grammer, 1);

recognition.grammers = speechrecoggrammer;
recognition.lang = 'en-US';
recognition.interimResults = false;

var message = document.getElementById("res");