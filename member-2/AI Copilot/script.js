const input = document.getElementById("copilotInput");
const sendBtn = document.getElementById("sendBtn");
const response = document.getElementById("response");

sendBtn.addEventListener("click", sendMessage);

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        sendMessage();
    }

});


function sendMessage() {

    const message = input.value.trim();

    if (!message) {
        return;
    }

    response.style.display = "block";

    response.innerHTML = `
        <strong>✦ AI Copilot</strong>
        <br><br>
        I understand your request:
        <br>
        "${message}"
        <br><br>
        This is a demo AI Copilot interface.
        Connect your preferred AI API to generate real responses.
    `;

    input.value = "";
}


document.querySelectorAll(".suggestion").forEach(button => {

    button.addEventListener("click", function() {

        input.value = this.textContent.trim();

        input.focus();

    });

});


document.querySelectorAll(".side-item").forEach(button => {

    button.addEventListener("click", function() {

        document.querySelectorAll(".side-item")
            .forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});