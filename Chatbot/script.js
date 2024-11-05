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

const FirstLogo = document.getElementById('first-logo');
const SecondLogo = document.getElementById('second-logo');

const HeaderOne = document.querySelector('.header-1');

const ClearChatBtn = document.getElementById('clearChatBtn');
const LogoSection = document.querySelector('.logo-section');
const ChatSection = document.querySelector('.chat-section');
const ChatMessages = document.querySelector('.chats');
const Buttons = document.querySelector('.buttons');

var ThreeDotsCard = document.getElementById('three-dots-cards');

const homeBtn = document.getElementById('homeBtn');
const contactBtn = document.getElementById('contactBtn');
const homeTab = document.getElementById('home');
const homeBody = document.querySelector('.body');

const contactTab = document.getElementById('contact');

// Default States
SecondSVG.style.display = 'none';
// SecondLogo.style.display = 'none';

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
})

closeBtns.forEach((item) => {
    item.addEventListener('click', function () {
        ChatBotBtn.style.display = 'inline';
        Content.style.display = "none";
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
    if (InputField.value.trim() !== '') {
        InputSVG.style.backgroundColor = 'var(--blue)';
        InputSVG.style.color = 'var(--white)';
        InputSVG.style.cursor = 'pointer';
    } else {
        InputSVG.style.backgroundColor = 'transparent';
        InputSVG.style.color = 'var(--black)';
        InputSVG.style.cursor = 'not-allowed';
    }
}

// Message Send
function onClickInputSVG(message) {
    Buttons.style.display = 'none';
    const userMessage = document.createElement('span');
    userMessage.innerText = message;
    userMessage.style.marginTop = '15px';
    userMessage.style.backgroundColor = '#0059E1';
    userMessage.style.color = 'white';
    userMessage.style.width = 'fit-content';
    userMessage.style.animation = 'newMessage 0.4s';
    ChatMessages.style.height = '45vh';

    ChatMessages.appendChild(userMessage);
    InputField.value = '';

    activeInputSend();
}

InputSVG.addEventListener('click', function () {
    if (InputField.value.trim() !== '') {
        onClickInputSVG(InputField.value);
        InputField.value = '';
    }
})

var actionButtons = document.querySelectorAll('.btn');
actionButtons[0].addEventListener('click', function () {
    onClickInputSVG(actionButtons[0].innerText);
});
actionButtons[1].addEventListener('click', function () {
    onClickInputSVG(actionButtons[0].innerText);
});
actionButtons[2].addEventListener('click', function () {
    onClickInputSVG(actionButtons[0].innerText);
});
actionButtons[3].addEventListener('click', function () {
    onClickInputSVG(actionButtons[0].innerText);
});

// Show/Hide three dots menu 
threeDots.addEventListener('click', function () {
    if (ThreeDotsCard.style.display == 'none') {
        ThreeDotsCard.style.display = 'inline';
    } else {
        ThreeDotsCard.style.display = 'none';
    }
})

// Show/Hide logo on scroll
homeBody.addEventListener('scroll', function () {
    const scrollTop = homeBody.scrollTop || homeBody.documentElement.scrollTop;
    if (scrollTop > 20) {
        HeaderOne.style.backgroundColor = 'var(--white)';
        HeaderOne.style.justifyContent = 'space-between';
        document.getElementById('emptyContainer').style.display = 'inline';
        SecondLogo.style.display = 'block';
        FirstLogo.style.display = 'none';
        SecondLogo.style.animation = 'logoAnimationComing 0.4s';

    } else {
        HeaderOne.style.backgroundColor = 'transparent';
        HeaderOne.style.justifyContent = 'space-between';
        document.getElementById('emptyContainer').style.display = 'none';
        SecondLogo.style.display = 'none';
        FirstLogo.style.display = 'block';
        FirstLogo.style.animation = 'logoAnimationGoing 0.4s';
    }
})

// Clear chat functionility
ClearChatBtn.addEventListener('click', function () {
    // LogoSection.style.display = 'none';
    var spans = ChatMessages.querySelectorAll('span');
    for (var i = 0; i < spans.length; i++) {
        spans[i].remove();
    }
    Buttons.style.display = 'none';
})