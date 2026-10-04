const command = document.getElementById("command");
const result = document.getElementById("result");

function setCommand(text) {
    command.value = text;
    executeCommand();
}

function executeCommand() {
    const text = command.value.trim();

    if (!text) return;

    result.innerHTML = `
        <h3>Command Executed</h3>
        <p>${text}</p>
        <p>The AI command has been processed successfully.</p>
    `;
}

command.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        executeCommand();
    }
});