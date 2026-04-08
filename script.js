// 🔍 Search Function
function searchFunction() {
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();
        cards[i].style.display = text.includes(input) ? "block" : "none";
    }
}

// 📥 Upload PDF (local preview only)
function uploadPDF() {
    let fileInput = document.getElementById("fileInput");
    let file = fileInput.files[0];

    if (!file) {
        alert("Please select a PDF file");
        return;
    }

    let url = URL.createObjectURL(file);

    let div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<a href="${url}" target="_blank">${file.name}</a>`;

    document.getElementById("subjectList").appendChild(div);
}
