document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function () {
        this.style.transform = "scale(0.98)";

        setTimeout(() => {
            this.style.transform = "";
        }, 120);
    });
});