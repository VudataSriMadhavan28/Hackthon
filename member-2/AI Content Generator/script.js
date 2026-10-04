const prompt = document.getElementById("prompt");

const contentType =
    document.getElementById("contentType");

const tone =
    document.getElementById("tone");

const generateBtn =
    document.getElementById("generateBtn");

const output =
    document.getElementById("output");

const copyBtn =
    document.getElementById("copyBtn");


generateBtn.addEventListener("click", function () {

    const userPrompt = prompt.value.trim();

    if (!userPrompt) {

        output.innerHTML = `
            <div class="empty-state">
                <h3>Please enter a content idea.</h3>
                <p>Tell the AI what you want to create.</p>
            </div>
        `;

        return;
    }


    output.innerHTML = `
        <div class="generated-content">

<strong>${contentType.value}</strong>

Tone: ${tone.value}

---

Here is your AI-generated content based on your request:

${userPrompt}

AI can help transform this idea into a polished,
engaging and structured piece of content.

This demo interface is ready to be connected
to an AI API for real content generation.

        </div>
    `;

});


copyBtn.addEventListener("click", async function () {

    const content =
        document.querySelector(".generated-content");

    if (!content) {
        return;
    }

    try {

        await navigator.clipboard.writeText(
            content.innerText
        );

        copyBtn.textContent = "Copied ✓";

        setTimeout(() => {
            copyBtn.textContent = "Copy";
        }, 1500);

    } catch (error) {

        copyBtn.textContent = "Copy failed";

    }

});