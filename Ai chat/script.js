const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");
const typing = document.getElementById("typing");

const newChat = document.getElementById("newChat");
const clearChat = document.getElementById("clearChat");


// SEND MESSAGE

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const text = input.value.trim();

    if (!text) {
        return;
    }

    addUserMessage(text);

    input.value = "";

    input.style.height = "auto";

    showTyping();

    setTimeout(() => {

        hideTyping();

        addAIMessage(
            getAIResponse(text)
        );

    }, 1200);

});


// ADD USER MESSAGE

function addUserMessage(text) {

    const message = document.createElement("div");

    message.className =
        "message user-message";

    message.innerHTML = `

        <div class="message-content">

            <span class="message-name">
                You
            </span>

            <div class="bubble">
                ${escapeHTML(text)}
            </div>

        </div>

        <div class="message-avatar user-avatar">
            U
        </div>

    `;

    messages.appendChild(message);

    scrollToBottom();
}


// ADD AI MESSAGE

function addAIMessage(text) {

    const message = document.createElement("div");

    message.className =
        "message ai-message";

    message.innerHTML = `

        <div class="message-avatar">
            ✦
        </div>

        <div class="message-content">

            <span class="message-name">
                AI Assistant
            </span>

            <div class="bubble">
                ${text}
            </div>

        </div>

    `;

    messages.appendChild(message);

    scrollToBottom();
}


// SIMPLE DEMO AI RESPONSE

function getAIResponse(message) {

    const text =
        message.toLowerCase();

    if (text.includes("hello") ||
        text.includes("hi")) {

        return "Hello! 👋 How can I help you today?";
    }

    if (text.includes("website")) {

        return `
            A great AI website can include
            <strong>AI Chat, AI Search, AI Copilot,
            content generation and analytics</strong>.
            A glassmorphism design would work very well.
        `;
    }

    if (text.includes("design")) {

        return `
            For a premium AI design, try using
            dark backgrounds, gradient accents,
            glass cards, subtle 3D effects and
            smooth micro-interactions.
        `;
    }

    if (text.includes("help")) {

        return `
            Of course! I can help you with
            UI design, coding, ideas, explanations
            and many other tasks. ✨
        `;
    }

    return `
        That's an interesting question.
        For this demo interface, imagine the AI
        generating a detailed response here.
        🤖
    `;
}


// TYPING

function showTyping() {

    typing.classList.add("show");

    scrollToBottom();
}


function hideTyping() {

    typing.classList.remove("show");
}


// SCROLL

function scrollToBottom() {

    messages.scrollTop =
        messages.scrollHeight;
}


// TEXTAREA AUTO RESIZE

input.addEventListener("input", function() {

    this.style.height = "auto";

    this.style.height =
        Math.min(this.scrollHeight, 120) + "px";
});


// ENTER TO SEND

input.addEventListener("keydown", function(event) {

    if (
        event.key === "Enter" &&
        !event.shiftKey
    ) {

        event.preventDefault();

        form.dispatchEvent(
            new Event("submit")
        );
    }
});


// NEW CHAT

newChat.addEventListener("click", function() {

    messages.innerHTML = `

        <div class="message ai-message">

            <div class="message-avatar">
                ✦
            </div>

            <div class="message-content">

                <span class="message-name">
                    AI Assistant
                </span>

                <div class="bubble">
                    New conversation started.
                    How can I help you? ✨
                </div>

            </div>

        </div>

    `;

    input.focus();
});


// CLEAR CHAT

clearChat.addEventListener("click", function() {

    messages.innerHTML = `

        <div class="message ai-message">

            <div class="message-avatar">
                ✦
            </div>

            <div class="message-content">

                <span class="message-name">
                    AI Assistant
                </span>

                <div class="bubble">
                    Chat cleared. Start a new conversation!
                </div>

            </div>

        </div>

    `;
});


// SUGGESTIONS

document.querySelectorAll(".suggestion")
    .forEach(button => {

        button.addEventListener("click", function() {

            input.value =
                this.textContent
                    .replace(/[💡✨📚]/g, "")
                    .trim();

            input.focus();

        });

    });


// SECURITY

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}