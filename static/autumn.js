document.addEventListener("DOMContentLoaded", function () {
    const factList = document.getElementById("fact-list");
    const loadFactsButton = document.getElementById("load-facts");

    // Array of autumn facts
    const autumnFacts = [
        "Autumn, also known as fall, is the season between summer and winter.",
        "Leaves on trees change color during autumn, creating beautiful displays of red, orange, and yellow.",
        "Harvest festivals are common during this season, celebrating the abundance of crops.",
        "People often enjoy activities like apple picking and pumpkin carving in the fall.",
        "The autumnal equinox marks the beginning of autumn and occurs around September 22nd."
    ];

    // Function to add facts to the list with neon effect
    function addFacts() {
        autumnFacts.forEach((fact) => {
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
})