// Initialization
const ChatBotBtn = document.getElementById('chatbotBtn');
const FirstSVG = document.getElementById('first');
const SecondSVG = document.getElementById('second');
const Content = document.getElementById('content');
const closeBtn = document.getElementById('close-btn');
const homeBtn = document.getElementById('homeBtn');
const contactBtn = document.getElementById('contactBtn');

// Default States
SecondSVG.style.display = 'none';

// Event Listeners

// Mouse Over/Mouse Out effect over chatbot round button
ChatBotBtn.addEventListener('mouseover', function () {
    FirstSVG.style.display = 'none';
    SecondSVG.style.display = 'inline';
})

ChatBotBtn.addEventListener('mouseout', function () {
    FirstSVG.style.display = 'inline';
    SecondSVG.style.display = 'none';
})

// Open/Close Content Window onClick
ChatBotBtn.addEventListener('click', function() {
    ChatBotBtn.style.display = 'none';
    Content.style.display = "block";
})

closeBtn.addEventListener('click', function() {
    ChatBotBtn.style.display = 'inline';
    Content.style.display = "none";
})

// Switch tabs home/contact