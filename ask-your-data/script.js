const questionInput = document.getElementById("questionInput");
const askButton = document.getElementById("askButton");

const examples = document.querySelectorAll(".example");

examples.forEach(example => {
    example.addEventListener("click", () => {
        questionInput.value = example.textContent.trim();
        questionInput.focus();
    });
});

askButton.addEventListener("click", askData);

questionInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        askData();
    }
});

function askData() {

    const question = questionInput.value.trim();

    if (!question) {
        questionInput.focus();
        return;
    }

    askButton.innerHTML = "Thinking...";

    setTimeout(() => {

        askButton.innerHTML = "Ask AI <span>→</span>";

        document.getElementById("answerTitle").textContent =
            "AI found an interesting pattern in your data";

        document.getElementById("answerText").innerHTML =
            `Based on your question, the data shows a clear trend.
             The analysis identified <strong>December</strong> as the
             strongest period with significant revenue growth.`;

    }, 1000);
}