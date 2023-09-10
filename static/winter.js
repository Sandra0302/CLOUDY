document.addEventListener("DOMContentLoaded", function () {
    const factList = document.getElementById("fact-list");
    const loadFactsButton = document.getElementById("load-facts");

    // Array of winter facts
    const winterFacts = [
        "Winter is the coldest season of the year.",
        "Snowfall is a common occurrence in many regions during winter.",
        "Winter is a popular time for holidays and celebrations, including Christmas and New Year's Eve.",
        "Hot beverages like hot chocolate and mulled wine are enjoyed during the winter to keep warm.",
        "Some animals hibernate during the winter months to conserve energy."
    ];

    // Function to add facts to the list with neon effect
    function addFacts() {
        winterFacts.forEach((fact) => {
            const listItem = document.createElement("li");
            listItem.textContent = fact;
            listItem.style.color = getRandomNeonColor(); // Add neon color
            factList.appendChild(listItem);
        });

        // Disable the button after loading facts
        loadFactsButton.disabled = true;
    }

    // Event listener for the "Load Facts" button
    loadFactsButton.addEventListener("click", addFacts);

    // Generate a random neon color
    function getRandomNeonColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});