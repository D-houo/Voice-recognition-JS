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

recognition.onresult = function(event){
    var last = event.results.length - 1;
    var command = event.results[last][0].transcript;
    message.textContent = 'voice input: '+ command + '.';

    if (command.toLowerCase() === "select apple"){
        document.getElementById("apple").checked = true;
    }
}

document.getElementById("button").addEventListener("click", function(){recognition.start();},false);
document.onload = function(){
    alert("khifytdyf");
}