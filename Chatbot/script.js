// Initialization
const ChatBotBtn = document.getElementById('chatbotBtn');
const FirstSVG = document.getElementById('first');
const SecondSVG = document.getElementById('second');
const Content = document.getElementById('content');
const closeBtns = document.querySelectorAll('.close-btn');
const backBtn = document.getElementById('back-arrow');
const threeDots = document.getElementById('three-dots');

const Link = document.querySelectorAll('.link');
const NextLink = document.querySelectorAll('.link-svg');

const InputField = document.getElementById('inputField');
const InputSVG = document.getElementById('inputSVG');

const SecondLogo = document.getElementById('second-logo');
const HeaderOne = document.querySelector('.header-1');

const ClearChatBtn = document.getElementById('clearChatBtn');
const LogoSection = document.querySelector('.logo-section');
const ChatSection = document.querySelector('.chat-section');
const Buttons = document.querySelector('.buttons');

var ThreeDotsCard = document.getElementById('three-dots-cards');

const homeBtn = document.getElementById('homeBtn');
const contactBtn = document.getElementById('contactBtn');
const homeTab = document.getElementById('home');
const contactTab = document.getElementById('contact');

// Default States
SecondSVG.style.display = 'none';
SecondLogo.style.display = 'none';

// Event Listeners

// Mouse Over/Mouse Out effect over chatbot round button
ChatBotBtn.addEventListener('mouseover', function () {
    FirstSVG.style.display = 'none';
    SecondSVG.style.display = 'block';
})

ChatBotBtn.addEventListener('mouseout', function () {
    FirstSVG.style.display = 'block';
    SecondSVG.style.display = 'none';
})

// Open/Close Content Window onClick
ChatBotBtn.addEventListener('click', function () {
    ChatBotBtn.style.display = 'none';
    Content.style.display = "block";
    console.log(1);
})

closeBtns.forEach((item) => {
    item.addEventListener('click', function () {
        ChatBotBtn.style.display = 'inline';
        Content.style.display = "none";
        console.log(2);
    })
})

// Switch tabs home/contact
homeBtn.addEventListener('click', function () {
    contactTab.style.display = 'none';
    homeTab.style.display = 'block';
    Content.style.background = 'linear-gradient(var(--blue-light), var(--grey-light))';
    Content.style.padding = '0px';
})

contactBtn.addEventListener('click', function () {
    homeTab.style.display = 'none';
    contactTab.style.display = 'block';
    contactTab.style.padding = '0px';
    Content.style.padding = '0px';
    // Content.style.background = 'var(--grey-lighter)'
})

backBtn.addEventListener('click', function () {
    contactTab.style.display = 'none';
    homeTab.style.display = 'block';
    Content.style.background = 'linear-gradient(var(--blue-light), var(--grey-light)) !important;'
})

// Change effects on link
Link[0].addEventListener('mouseover', function () {
    Link[0].style.backgroundColor = 'var(--grey)';
    NextLink[0].style.color = 'var(--blue)';
    NextLink[0].style.transform = 'translateX(4px)';
    NextLink[0].style.transition = '0.4s';
})

Link[0].addEventListener('mouseout', function () {
    Link[0].style.backgroundColor = 'var(--white)';
    NextLink[0].style.color = 'var(--black)';
    NextLink[0].style.transform = 'translateX(0px)';
    NextLink[0].style.transition = '0.4s';
})

Link[1].addEventListener('mouseover', function () {
    Link[1].style.backgroundColor = 'var(--grey)';
    NextLink[1].style.color = 'var(--blue)';
    NextLink[1].style.transform = 'translateX(4px)';
    NextLink[1].style.transition = '0.4s';
})

Link[1].addEventListener('mouseout', function () {
    Link[1].style.backgroundColor = 'var(--white)';
    NextLink[1].style.color = 'var(--black)';
    NextLink[1].style.transform = 'translateX(0px)';
    NextLink[1].style.transition = '0.4s';
})

// Change button style when input content change
function activeInputSend() {
    if (InputField.value !== '') {
        InputSVG.style.backgroundColor = 'var(--blue)';
        InputSVG.style.color = 'var(--white)';
        InputSVG.style.cursor = 'pointer';
    } else {
        InputSVG.style.backgroundColor = 'transparent';
        InputSVG.style.color = 'var(--black)';
        InputSVG.style.cursor = 'not-allowed';
    }
}

// Show/Hide three dots menu 
threeDots.addEventListener('click', function () {
    console.log(ThreeDotsCard.style.backgroundColor);
    if (ThreeDotsCard.style.display == 'none') {
        ThreeDotsCard.style.display = 'inline';
    } else {
        ThreeDotsCard.style.display = 'none';
    }
})

// Show/Hide logo on scroll
homeTab.addEventListener('scroll', function () {
    const scrollTop = homeTab.scrollTop || homeTab.documentElement.scrollTop;
        if (scrollTop > 20) {
            HeaderOne.style.backgroundColor = 'var(--white)';
            HeaderOne.style.position = 'fixed';
            HeaderOne.style.justifyContent = 'space-between';
            SecondLogo.style.display = 'inline';
        } else {
            HeaderOne.style.backgroundColor = 'transparent';
            HeaderOne.style.position = 'fixed';
            HeaderOne.style.justifyContent = 'end';
            SecondLogo.style.display = 'none';
        }
}) 

// Clear chat functionility 
// ClearChatBtn.addEventListener('click', function() {
//     LogoSection.style.display = 'none';
//     ChatSection.style.display = 'none';
//     Buttons.style.display = 'none';
// })