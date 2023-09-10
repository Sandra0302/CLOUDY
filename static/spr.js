document.addEventListener("DOMContentLoaded", function () {
    const factList = document.getElementById("fact-list");
    const loadFactsButton = document.getElementById("load-facts");

    // Array of spring facts
    const springFacts = [
        "Spring is the season of rebirth and renewal in nature.",
        "Flowers bloom in spring, and trees grow new leaves.",
        "Easter is a popular holiday celebrated during spring.",
        "The spring equinox marks the beginning of spring and occurs around March 20th.",
        "People often engage in gardening and outdoor activities during this season."
    ];

    // Function to add facts to the list with neon effect
    function addFacts() {
        springFacts.forEach((fact) => {
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