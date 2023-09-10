document.addEventListener("DOMContentLoaded", function () {
    const factList = document.getElementById("fact-list");
    const loadFactsButton = document.getElementById("load-facts");

    // Array of summer facts
    const summerFacts = [
        "Summer is the warmest season of the year.",
        "The longest day of the year occurs during the summer solstice.",
        "Many people enjoy outdoor activities such as swimming and barbecues during the summer.",
        "Summer is a popular time for vacations and travel.",
        "Ice cream is a favorite summer treat to cool down on hot days."
    ];

    // Function to add facts to the list with neon effect
    function addFacts() {
        summerFacts.forEach((fact) => {
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
