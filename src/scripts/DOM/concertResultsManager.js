let concert_id = 0;

const concertSearchResultsDomManager = {
    concertFactory(concert){
        concert_id ++;
        return `
            <section class="concert" id="concert--${concert_id}">
                <br>
                <div class="concert-name">${concert.name}</div>
                <div class="concert-date">${concert.dates.start.localDate}</div>
                <div class="concert-time">${concert.dates.start.localTime}</div>
                <div class="concert-links"><a href="${concert.url}">Link</a></div>
                <button id="save--${concert_id}" class="concert-save">
                    Save &#11088;
                </button>
      
                <br>
            </section>
        `
    },
    renderSearchResults(searchResults) {
        const concerts = searchResults._embedded.events
        // Uncomment this to get a log of the fetch result:
        // console.log(concerts);
        const container = document.querySelector("#resultsContainer");
        container.innerHTML = "<h2>Concert Results</h2>";
        concerts.forEach(concert => {
          container.innerHTML += this.concertFactory(concert)
          // Added this
          this.listenerSaveItinerary(`save--${concert_id}`);
          ;
        });

    },
    listenerSaveItinerary(buttonId){
        const button = document.getElementById(buttonId);
        button.addEventListener("click", () => {
            //Take the Article tied to buttonID
            const sectionId = buttonId.split("-")[2]; // This grabs the concertId from the button
            console.log(sectionId); 
            this.saveItinerary(sectionId);
            //Pass it to an Itinerary Dom Output thing
            
        })
    },
    saveItinerary(sectionId){
        const container = document.getElementById(concertsItineraryContainer);
        const section = document.getElementById(`concert--${sectionId}`);
        console.log(section);
        container.innerHTML = `<h3>Favorite Restaurant:</h2>` + section.innerHTML;
    }


}


// Half-finished code to save:
// This should go on the event listener...
// const saveCard = (event) => {
//     const id = event.target.id.split("-")[2];
//     const card = document.getElementById(`card--${id}`)
//     outputContainer.removeChild(card)
// }

// Abandoned method
// concert_id ++;
// const entryField = document.getElementById("search-concerts");
// const outputContainer = document.getElementById("itineraryContainer");
// const card = document.createElement("article");
// // card.classList.add("border");
// card.id = `card--${concert_id}`;
// // Change this
// card.textContent = searchCriteria;

// const saveButton = document.createElement("BUTTON")
// saveButton.innerHTML = "SAVE";
// saveButton.id = `save--${concert_id}`;
// saveButton.classList.add("saveButton");
// saveButton.addEventListener("click", saveCard);
// card.appendChild(saveButton);

// outputContainer.appendChild(card);