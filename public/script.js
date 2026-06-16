const askBtn = document.getElementById("askBtn");
const questionInput = document.getElementById("questionInput");
const responseBox = document.getElementById("responseBox");

askBtn.addEventListener("click", async () => {

    const question = questionInput.value;

    responseBox.innerHTML =
        "🤖 Thinking...";

    try {
        if (!question.trim()) {
    responseBox.innerHTML =
        "⚠ Please enter a question.";
    return;
}

        const response = await fetch("/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question
            })
        });

        const data = await response.json();

        responseBox.innerHTML = data.answer;

    } catch (error) {

        responseBox.innerHTML =
            "❌ Error generating answer";

        console.error(error);
    }
});