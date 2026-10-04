const form = document.getElementById("searchForm");
const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const resultsGrid = document.getElementById("resultsGrid");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const query = input.value.trim();

    if (!query) {
        input.focus();
        return;
    }

    search(query);

});


function search(query) {

    resultsGrid.innerHTML = "";

    const data = [

        {
            icon: "✦",
            tag: "AI Answer",
            title: `Understanding "${query}"`,
            description:
                `AI-generated information and useful context related to your search for "${query}".`,
            source: "AI Knowledge Base"
        },

        {
            icon: "💡",
            tag: "Insight",
            title: `${query} — Key Insights`,
            description:
                `Here are some important concepts, ideas and insights connected to your search.`,
            source: "AI Insights"
        },

        {
            icon: "📚",
            tag: "Resource",
            title: `Learn more about ${query}`,
            description:
                `Explore related information and resources to understand this topic in greater detail.`,
            source: "AI Learning Center"
        }

    ];

    data.forEach(item => {

        const card =
            document.createElement("article");

        card.className = "result-card";

        card.innerHTML = `

            <div class="result-top">

                <span class="result-icon">
                    ${item.icon}
                </span>

                <span class="tag">
                    ${item.tag}
                </span>

            </div>

            <h3>
                ${escapeHTML(item.title)}
            </h3>

            <p>
                ${escapeHTML(item.description)}
            </p>

            <div class="source">
                <span>●</span>
                ${item.source}
            </div>

        `;

        resultsGrid.appendChild(card);

    });

    results.scrollIntoView({
        behavior: "smooth"
    });

}


document
    .querySelectorAll(".suggestions button")
    .forEach(button => {

        button.addEventListener("click", function() {

            input.value =
                this.textContent.trim();

            search(input.value);

        });

    });


function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}