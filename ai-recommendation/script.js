const input = document.getElementById("recommendInput");
const button = document.getElementById("recommendBtn");
const suggestions = document.querySelectorAll(".suggestion");

suggestions.forEach(item => {
    item.addEventListener("click", () => {
        input.value = item.textContent;
        input.focus();
    });
});

button.addEventListener("click", generateRecommendation);

input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        generateRecommendation();
    }
});

function generateRecommendation() {
    const query = input.value.trim();

    if (!query) {
        input.focus();
        return;
    }

    button.innerHTML = "Analyzing... <span>✦</span>";
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = "Recommendations Ready <span>✓</span>";
        button.disabled = false;

        document.querySelector(".results-section")
            .scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            button.innerHTML = 'Get Recommendations <span>→</span>';
        }, 1800);
    }, 1000);
}

document.querySelectorAll(".view-btn").forEach(button => {
    button.addEventListener("click", () => {
        button.textContent = "Recommendation Selected ✓";

        setTimeout(() => {
            button.textContent = "Explore Recommendation →";
        }, 1500);
    });
});