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
    let file = document.getElementById("fileInput").files[0];

    if (!file) {
        alert("Select a file first");
        return;
    }

    let storageRef = storage.ref("pdfs/" + file.name);

    storageRef.put(file).then(() => {
        alert("Uploaded Successfully!");

        storageRef.getDownloadURL().then((url) => {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `<a href="${url}" target="_blank">${file.name}</a>`;
            document.getElementById("subjectList").appendChild(div);
        });
    });
}