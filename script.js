// =========================
// SEARCH SUBJECTS
// =========================

function searchFunction() {

    const input =
        document.getElementById("search")
        .value
        .toLowerCase()
        .trim();

    const cards =
        document.querySelectorAll(".subjects .card");

    const noResults =
        document.getElementById("noResults");

    let visibleCards = 0;

    cards.forEach(card => {

        const text =
            card.innerText.toLowerCase();

        if (text.includes(input)) {

            card.style.display = "flex";

            visibleCards++;

        } else {

            card.style.display = "none";

        }

    });

    noResults.style.display =
        visibleCards === 0 ? "block" : "none";
}


// =========================
// UPLOAD PDF
// =========================

function uploadPDF() {

    const file =
        document.getElementById("fileInput")
        .files[0];

    if (!file) {

        alert("Please select a PDF first.");

        return;
    }

    if (file.type !== "application/pdf") {

        alert("Only PDF files are allowed.");

        return;
    }

    /*
       Firebase upload code can remain here
       after your Firebase configuration
       is properly connected.
    */

    alert(
        "PDF selected successfully.\n\n" +
        "Firebase upload will be enabled once " +
        "your Firebase configuration is connected."
    );
}