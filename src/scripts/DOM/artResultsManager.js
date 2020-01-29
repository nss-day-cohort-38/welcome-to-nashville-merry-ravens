 let art_id = 0 
 const artSearchResultsDomManager = {
     artFactory(art) {
         art_id++
         return ` 
         <section class="artGeneral">
          <div>
         <h1 class="artsubTitle">Location: ${art[`location`]}</h1> 
         <h1 class="artsubTitle">Artist Name: ${art[`first_name`]} ${art[`last_name`]}</h1>
         <h1 class="artsubTitle">Artwork: ${art.artwork}</h1>
         <h1 class="artsubTitle">Description</h1>
         <p class="artDescription">${art.description}</p>
         </div>
         <button id="save--${art_id}" class="art-save">
         Save &#11088;
         </button>
         </section>
         `
     }, 
     renderSearchResults(searchResults) {
        const container = document.querySelector("#resultsContainer")
        container.innerHTML = "<h1>Art by Description Results</h1>";
        if(searchResults.length >= 1) {
            searchResults.forEach(result => {
                container.innerHTML += this.artFactory(result)
            })
        } else {
            container.innerHTML += "<p>No results availalble</p>"
        }

     }, 
     artItineraryResultsDomManager(art) {
         return `
         ${art[`location`]}
         
         `
     }, 
     renderItineraryResults(itinerary) {
         const container = document.querySelector("#itineraryContainer")
         container.innerHTML = "<h4>Art location:</h4>"
        container.innerHTML += this.artItineraryResultsDomManager(itinerary)
         }
}

const itineraryArtEventManager = (evt) {
    addArtItineraryClickEventListener() {
        
        const button = evt.target.id
        const index = buttonId.split('-')[1];
        const routeDiv = document.getElementById(`save--${art_id}`)
        
        button.addEventListener("click", () => {
            
            const input = document.getElementByItinerary("art-save");
            const searchCriteria = input.value;
            const searchArtResultPromise = artApiManager.searchArtLocations(searchCriteria);
            searchArtResultPromise.then(searchResults => {
                artItineraryResultsDomManager.renderItineraryResults(searchResults)
            
        })
    })
}}
itineraryArtEventManager.addArtItineraryClickEventListener()

const itineraryArtEventHandler = (evt) => {
    const buttonId = evt.target.id;
    const index = buttonId.split('-')[1];
  
    const routeDiv = document.getElementById(`routename-${index}`);
    const stopDiv = document.getElementById(`stopname-${index}`);
    const stopText = `${routeDiv.textContent.trim()}: ${stopDiv.textContent.trim()}`;
    alert(`You like\n${stopText}`);
  
    const busStopSection = document.getElementById(`busstop-${index}`);
    busStopSection.classList.add('favorite');
  };
  
  const favoriteEventManager = {
    addFavoriteEventListeners() {
      const buttons = document.querySelectorAll(".bus-stop__favorite");
      for (let button of buttons) {
        button.addEventListener("click", favoriteEventHandler);
      }
    },
    removeFavoriteEventListeners() {
      const buttons = document.querySelectorAll(".bus-stop__favorite");
      for (let button of buttons) {
        button.removeEventListener("click", favoriteEventHandler);
      }
    }
  }