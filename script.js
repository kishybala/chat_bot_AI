const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "hi-IN";
    speech.pitch = 1;
    speech.rate = 1;

    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices.find(voice => voice.lang === "hi-IN") || voices[0];
    window.speechSynthesis.speak(speech);
}

function getResponse(message) {
    message = message.toLowerCase();

    const responses = {
        "hey buzzy": "Haan bol bhai?",
        "kaise ho": "Main badhiya hoon, tu bata?",
        "kya kar rahe ho": "Main sirf tumse baat kar raha hoon!",
        "aaj ka din kaisa hai": "Bhot badhiya, maan kar raha hai sote rahun?",
        "aaj konsa din h": new Date().toLocaleDateString('hi-IN', { weekday: 'long' })
    
    };

    for (let key in responses) {
        if (message.includes(key)) {
            return responses[key];
        }
    }

   
    const randomResponses = [
        "Mujhe samajh nahi aaya, lekin mai seekhne ki koshish kar raha hoon!",
        "Wah! Ye interesting sawal hai.",
        "Main abhi iske baare mein nahi jaanta, lekin bata sakta hoon!",
        "Mujhe samajh nahi aaya, kya aap dobara bol sakte hain?",
        "Meri memory thodi weak hai, par main seekh sakta hoon!"
    ];

    return randomResponses[Math.floor(Math.random() * randomResponses.length)];
}

function handleMessage(message) {
    chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;

    let response = getResponse(message);
    chatBox.innerHTML += `<p><strong>Buzzy:</strong> ${response}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    speak(response);
}


sendBtn.addEventListener("click", () => {
    const message = userInput.value.trim();
    if (message) {
        handleMessage(message);
        userInput.value = "";
    }
});


r

