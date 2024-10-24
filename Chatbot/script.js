// Initialization
const ChatBotBtn = document.getElementById('chatbotBtn');
const FirstSVG = document.getElementById('first');
const SecondSVG = document.getElementById('second');
const Content = document.getElementById('content');
const closeBtns = document.querySelectorAll('.close-btn');
const backBtn = document.getElementById('back-arrow');
const threeDots = document.getElementById('three_dots');

const homeBtn = document.getElementById('homeBtn');
const contactBtn = document.getElementById('contactBtn');
const homeTab = document.getElementById('home');
const contactTab = document.getElementById('contact');

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

closeBtns.forEach((item) => {
    item.addEventListener('click', function() {
        ChatBotBtn.style.display = 'inline';
        Content.style.display = "none";
    })  
})

// Switch tabs home/contact
homeBtn.addEventListener('click', function() {
    contactTab.style.display = 'none';
    homeTab.style.display = 'inline';
})

contactBtn.addEventListener('click', function() {
    homeTab.style.display = 'none';
    contactTab.style.display = 'inline';
})

backBtn.addEventListener('click', function() {
    contactTab.style.display = 'none';
    homeTab.style.display = 'inline';
})