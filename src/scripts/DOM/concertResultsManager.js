let concert_id = 0;

const concertSearchResultsDomManager = {
    concertFactory(concert){
        concert_id ++;
        return `
            <section class="concert">
                <div class="concert-name" id="concert--${concert_id}">
                    ${concert.name} <a href="${concert.url}">[Link]</a>
                </div>
                <div class="concert-date">${concert.dates.start.localDate}</div>
                <div class="concert-time">${concert.dates.start.localTime}</div>
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
        });
        this.addSaveEventListener();
    },
    addSaveEventListener(){
        const buttons = document.querySelectorAll(".concert-save")
        buttons.forEach(button =>{
            button.addEventListener("click", (e) => {
                const buttonId = e.target.id;
                const sectionId = buttonId.split("-")[4]; // This grabs the concertId from the button
                this.saveItinerary(sectionId);
            })
        })
    },
    saveItinerary(sectionId){
        const container = document.getElementById("concertsItineraryContainer");
        const section = document.getElementById(`concert--${sectionId}`);
        container.innerHTML = `Concert: ` + section.innerHTML;
    }
}