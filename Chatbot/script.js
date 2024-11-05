// Initialization
const ChatBotBtn = document.getElementById('chatbotBtn');
const FirstSVG = document.getElementById('first');
const SecondSVG = document.getElementById('second');
const Content = document.getElementById('content');
const closeBtns = document.querySelectorAll('.close-btn');
const resizeBtns = document.querySelectorAll('.resize-btn');
const backBtn = document.getElementById('back-arrow');
const threeDots = document.getElementById('three-dots');

const Link = document.querySelectorAll('.link');
const NextLink = document.querySelectorAll('.link-svg');

const InputField = document.getElementById('inputField');
const InputSVG = document.getElementById('inputSVG');

const FirstLogo = document.getElementById('first-logo');
const SecondLogo = document.getElementById('second-logo');

const HeaderOne = document.querySelector('.header-1');
const HeaderTwo = document.querySelector('.header-2');

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
    Content.style.top = '30px';
    Content.style.bottom = '10px';
})

closeBtns.forEach((item) => {
    item.addEventListener('click', function () {
        ChatBotBtn.style.display = 'inline';
        Content.style.display = "none";
    })
})

// Minimize/Maximize Content window
resizeBtns.forEach((item) => {
    item.addEventListener('click', function () {
        if (Content.style.width != '50%') {
            Content.style.width = '50%';
            Content.style.height = 'fit-content';
        } else {
            Content.style.width = '27%';
            Content.style.height = 'fit-content';
        }
    })
})

// Switch tabs home/contact
homeBtn.addEventListener('click', function () {
    contactTab.style.display = 'none';
    homeTab.style.display = 'block';
    Content.style.background = 'linear-gradient(var(--blue-light), var(--grey-light))';
    Content.style.height = '90%';
})

contactBtn.addEventListener('click', function () {
    homeTab.style.display = 'none';
    contactTab.style.display = 'block';
    contactTab.style.paddingBottom = '20px';
    Content.style.height = '87%'
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
    const scrollTop = homeBody.scrollTop;
    if (scrollTop > 10) {
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

// Drag Content - Draggable area: Content, Dragzone: Content
function dragPrompt(element, dragzone) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    function dragMouseUp() {
        document.onmouseup = null;
        document.onmousemove = null;
    };

    function dragMouseMove(event) {
        event.preventDefault();
        pos1 = pos3 - event.clientX;
        pos2 = pos4 - event.clientY;
        pos3 = event.clientX;
        pos4 = event.clientY;
        element.style.top = `${element.offsetTop - pos2}px`;
        element.style.left = `${element.offsetLeft - pos1}px`;
    };

    function dragMouseDown(event) {
        event.preventDefault();
        pos3 = event.clientX;
        pos4 = event.clientY;
        element.classList.add("drag");
        document.onmouseup = dragMouseUp;
        document.onmousemove = dragMouseMove;
    };

    dragzone[0].onmousedown = dragMouseDown;
    dragzone[1].onmousedown = dragMouseDown;
};

dragPrompt(Content, [HeaderOne, HeaderTwo]);