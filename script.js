function searchFunction() {

    const input = document
        .getElementById("search")
        .value
        .toLowerCase()
        .trim();

    const cards = document.querySelectorAll(".semester-card");

    const noResults =
        document.getElementById("noResults");

    let found = 0;

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "flex";

            found++;

        } else {

            card.style.display = "none";

        }

    });

    if (found === 0 && input !== "") {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }
}