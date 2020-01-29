 const artSearchResultsDomManager = {
     artFactory(art) {
         return ` 
         <section class="artGeneral">
          
         <h1 class="artsubTitle">Location</h1>
         <p><h4 class="artLocation">${art[`location`]}</h4></p>
         <h1 class="artsubTitle">Artist</h1>
         <p><h4 class="artistName">${art[`first_name`]} ${art[`last_name`]}</h4></p>
         <h1 class="artsubTitle">Artwork</h1>
         <p><h4 class="artworkName">${art.artwork}</h4></p>
         <h1 class="artsubTitle">Description</h1>
         <p class="artDescription">${art.description}</p>

         </section>
         `
     }, 
     renderSearchResults(searchResults) {
        const container = document.querySelector("#resultsContainer")
        container.innerHTML = "<p>Art by Description Results</p>";
        if(searchResults.length >= 1) {
            searchResults.forEach(result => {
                container.innerHTML += this.artFactory(result)
            })
        } else {
            container.innerHTML += "<p>No results availalble</p>"
        }

     }
}