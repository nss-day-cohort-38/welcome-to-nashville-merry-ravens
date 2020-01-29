 let art_id = 0 

 const artSearchResultsDomManager = {
     artFactory(art) {
         art_id++
         return ` 
         <section class="artGeneral">
          <div>
         <h1 class="artsubTitle">Location of Artwork: ${art[`location`]}</h1> 
         <h1 class="artsubTitle">Artist Name: ${art[`first_name`]} ${art[`last_name`]}</h1>
         <h1 class="artsubTitle" id="art--${art_id}">Artwork: ${art.artwork}</h1>
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
        container.innerHTML = "<h1>Art Results</h1>";
        if(searchResults.length >= 1) {
            searchResults.forEach(result => {
                container.innerHTML += this.artFactory(result)
                
            })
        } else {
            container.innerHTML += "<p>No results availalble</p>"
        }
        this.addSaveEventListener();
     }, 
    saveItinerary(sectionId){
        const container = document.getElementById("artItineraryContainer");
         /* console.log(container) */
        const section = document.getElementById(`art--${sectionId}`);
        
        container.innerHTML = ` ` + section.innerHTML;
    },
    addSaveEventListener(){
        const buttons = document.querySelectorAll(".art-save")
        // console.log(buttons)
        // const button = document.getElementById(buttonId);
        buttons.forEach(button =>{
            button.addEventListener("click", (e) => {
                const buttonId = e.target.id;
                // console.log(`${buttonId} was clicked`);
                const sectionId = buttonId.split("-")[2]; // This grabs the concertId from the button
                  
                this.saveItinerary(sectionId);
            })
        })
    }
    
}