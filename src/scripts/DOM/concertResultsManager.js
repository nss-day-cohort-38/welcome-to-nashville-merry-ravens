let concert_id = 0;

const concertSearchResultsDomManager = {
    concertFactory(concert){
        concert_id ++;
        return `
            <section class="concert" id="concert--${concert_id}">
                <div class="concert-name">${concert.name}</div>
                <div class="concert-date">${concert.dates.start.localDate}</div>
                <div class="concert-time">${concert.dates.start.localTime}</div>
                <div class="concert-links"><a href="${concert.url}">Link</a></div>
                <button id="save--concert--${concert_id}" class="concert-save">
                    Save &#11088;
                </button>
            </section>
        `
    },
    renderSearchResults(searchResults) {
        const concerts = searchResults._embedded.events
        const container = document.querySelector("#resultsContainer");
        container.innerHTML = "<h2>Concert Results</h2>";
        concerts.forEach(concert => {
        container.innerHTML += this.concertFactory(concert)
          // For here on down was added for the itinerary
        });
        this.addSaveEventListener();
    },
    addSaveEventListener(){
        const buttons = document.querySelectorAll(".concert-save")
        // console.log(buttons)
        // const button = document.getElementById(buttonId);
        buttons.forEach(button =>{
            button.addEventListener("click", (e) => {
                const buttonId = e.target.id;
                // console.log(`${buttonId} was clicked`);
                const sectionId = buttonId.split("-")[4]; // This grabs the concertId from the button
                // console.log("SectionId =", sectionId); 
                this.saveItinerary(sectionId);
            })
        })
    },
    saveItinerary(sectionId){
        const container = document.getElementById("concertsItineraryContainer");
        // console.log(container)
        const section = document.getElementById(`concert--${sectionId}`);
        // console.log(section);
        container.innerHTML = `<h3>Favorite Concert:</h2>` + section.innerHTML;
    }
}