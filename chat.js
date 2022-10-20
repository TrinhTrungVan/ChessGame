var wSK = new WebSocket('ws://localhost:60000'); //WebSocket object generation

const chatDisplay = document.querySelector('.messenger-display');
const sendBtn = document.querySelector('.send-btn');

wSK.onopen = () => {
    //Action when connecting socket
    chatDisplay.innerHTML += 'Connected.' + '<br/>';
};

wSK.onmessage = (e) => {
    console.log(e);
    //Action when receiving a message
    chatDisplay.innerHTML += `<div class="left"}>${e.data}</div>` + '<br/>';
};

var sendMsg = () => {
    //Actions when sending a message
    var line = document.querySelector('.send-input'); //Get input
    wSK.send(line.value); //Send to socket
    line.value = ''; //Clear the contents
};

sendBtn.addEventListener('click', sendMsg);
