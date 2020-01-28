let concert_id = 0;

const concertFactory = () => {
    concert_id ++;
    const entryField = document.getElementById("search-concerts");
    const outputContainer = document.getElementById("itineraryContainer");
    const card = document.createElement("article");
    // card.classList.add("border");
    card.id = `card--${concert_id}`;
    card.textContent = entryField.value;

    const saveButton = document.createElement("BUTTON")
    saveButton.innerHTML = "SAVE";
    saveButton.id = `save--${concert_id}`;
    saveButton.classList.add("saveButton");
    saveButton.addEventListener("click", saveCard);
    card.appendChild(saveButton);

    outputContainer.appendChild(card);
// }

const saveCard = (event) => {
    const id = event.target.id.split("-")[2];
    const card = document.getElementById(`card--${id}`)
    outputContainer.removeChild(card)
}

concertFactory 