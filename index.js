const speechrecog = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new speechrecog();
var btn;
const reply = [
    'thats your command',
    'your command is my order',
    'here we go'
];
window.onload = function(){
    document.querySelector("#button").addEventListener('click', () => {
        recognition.start();
    });
}
recognition.onstart = function() 
{
    console.log("Voice activated");
};

recognition.onspeechend = function() 
{

};

recognition.onresult = function(event)
{
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    if(transcript.includes('apple')&&transcript.includes('select'))
    document.getElementById('apple').checked = true;
    if(transcript.includes('apple')&&transcript.includes('deselect'))
    document.getElementById('apple').checked = false;
    if(transcript.includes('orange')&&transcript.includes('select'))
    document.getElementById('orange').checked = true;
    if(transcript.includes('orange')&&transcript.includes('deselect'))
    document.getElementById('orange').checked = false;
    if(transcript.includes('grapes')&&transcript.includes('select'))
    document.getElementById('grapes').checked = true;
    if(transcript.includes('grapes')&&transcript.includes('deselect'))
    document.getElementById('grapes').checked = false;
    if(transcript.includes('strawberries')&&transcript.includes('select'))
    document.getElementById('strawberries').checked = true;
    if(transcript.includes('strawberries')&&transcript.includes('deselect'))
    document.getElementById('strawberries').checked = false;
    respond();
};

function respond()
{
    const speech = new SpeechSynthesisUtterance();
    speech.text = reply[Math.floor(Math.random() * reply.length)];
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}



