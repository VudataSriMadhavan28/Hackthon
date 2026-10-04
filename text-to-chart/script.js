const prompt = document.getElementById("chartPrompt");
const generateButton = document.getElementById("generateChart");

const chartTypes = document.querySelectorAll(".type");

chartTypes.forEach(type => {

    type.addEventListener("click", () => {

        chartTypes.forEach(item => {
            item.classList.remove("active");
        });

        type.classList.add("active");

        document.querySelector(".chart-header h2").textContent =
            type.dataset.type.toUpperCase() + " Visualization";
    });

});

generateButton.addEventListener("click", () => {

    const text = prompt.value.trim();

    if (!text) {
        prompt.focus();
        return;
    }

    generateButton.innerHTML = "Generating... ✦";
    generateButton.disabled = true;

    setTimeout(() => {

        generateButton.innerHTML = "Chart Generated ✓";
        generateButton.disabled = false;

        document.querySelector(".chart-section")
            .scrollIntoView({
                behavior: "smooth"
            });

        setTimeout(() => {
            generateButton.innerHTML = "Generate Chart <span>✦</span>";
        }, 1800);

    }, 1200);
});

document.getElementById("regenerate").addEventListener("click", () => {

    const bars = document.querySelectorAll(".bar");

    bars.forEach(bar => {

        const randomHeight =
            Math.floor(Math.random() * 55) + 35;

        bar.style.height = randomHeight + "%";

    });

});

document.getElementById("download").addEventListener("click", () => {

    const button = document.getElementById("download");

    button.textContent = "Exported ✓";

    setTimeout(() => {
        button.textContent = "↓ Export";
    }, 1500);

});
