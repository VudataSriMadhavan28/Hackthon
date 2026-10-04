function runPrompt() {
    const system = document.getElementById("system").value.trim();
    const prompt = document.getElementById("prompt").value.trim();
    const model = document.getElementById("model").value;
    const output = document.getElementById("output");

    if (!prompt) return;

    output.innerHTML = `
        <h3>AI Response</h3>
        <p><strong>Model:</strong> ${model}</p>
        <p><strong>Prompt:</strong> ${prompt}</p>
        <p>${system || "No system instructions provided."}</p>
        <br>
        <p>This is a working prompt interface prototype ready for AI API integration.</p>
    `;
}