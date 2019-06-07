const speechrecog = SpeechRecognition || webkitSpeechRecognition;
const recognition = new speechrecog();

const btn = document.getElementById("button");
recognition.onstart = funtion()
{
    console.log("voice is activated");
};

recognition.onspeechend = funtion() 
{

};

recognition.onresult = function(event)
{
    console.log(event);
};

btn.addEventListener('click', () => {
    recognition.onstart();
});