const input =
    document.getElementById("commandInput");

const sendButton =
    document.getElementById("sendButton");

const responseText =
    document.getElementById("responseText");

const responseSection =
    document.getElementById("responseSection");


// SEND COMMAND

function sendCommand() {

    const command =
        input.value.trim();

    if (!command) {
        input.focus();
        return;
    }

    showResponse(command);

}


// AI RESPONSE

function showResponse(command) {

    const text =
        command.toLowerCase();

    let response;

    if (
        text.includes("write") ||
        text.includes("writing")
    ) {

        response = `
            <strong>Writing Assistant</strong><br><br>

            I'd be happy to help you write.
            Start by telling me the topic, audience
            and style you want. ✍️
        `;

    } else if (
        text.includes("idea") ||
        text.includes("brainstorm")
    ) {

        response = `
            <strong>Idea Generator</strong><br><br>

            Here are some directions you could explore:
            AI productivity tools, smart dashboards,
            personalized assistants and creative AI tools. 💡
        `;

    } else if (
        text.includes("plan") ||
        text.includes("project")
    ) {

        response = `
            <strong>Project Planner</strong><br><br>

            A simple project structure could be:
            research → planning → UI design →
            development → testing → presentation. 📋
        `;

    } else if (
        text.includes("explain") ||
        text.includes("learn")
    ) {

        response = `
            <strong>Knowledge Assistant</strong><br><br>

            Sure! Tell me what topic you want
            explained and I can break it down into
            simple steps. 🧠
        `;

    } else {

        response = `
            <strong>AI Assistant</strong><br><br>

            I understand your request:
            <em>"${escapeHTML(command)}"</em>
            <br><br>

            This demo assistant would process your
            request and generate an intelligent response.
            ✨
        `;
    }

    responseText.innerHTML = response;

    responseSection.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


// BUTTON

sendButton.addEventListener(
    "click",
    sendCommand
);


// ENTER

input.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            sendCommand();

        }

    }
);


// QUICK ACTIONS

document
    .querySelectorAll(
        ".quick-actions button, .tool-btn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const command =
                    this.dataset.command;

                input.value = command;

                sendCommand();

            }
        );

    });


// ESCAPE HTML

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}