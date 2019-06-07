const speechrecog = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechrecog();

const btn = document.getElementById("button");
recognition.onStart = function() 
{
    console.log("voice is activated");
};

recognition.onspeechend = function() 
{

};

recognition.onresult = function(event)
{
    console.log(event);
};

btn.addEventListener('click', () => {
    recognition.start();
}, false);