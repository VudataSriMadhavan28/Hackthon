function generateInsight() {
    const data = document.getElementById("data").value.trim();
    const insight = document.getElementById("insight");

    if (!data) return;

    insight.innerHTML = `
        <h3>AI Generated Insight</h3>
        <p>The provided information contains useful patterns that can be analyzed for trends, relationships and opportunities.</p>
        <p><strong>Input analyzed:</strong> ${data}</p>
        <p>Recommendation: continue monitoring the important metrics and compare them over time.</p>
    `;
}