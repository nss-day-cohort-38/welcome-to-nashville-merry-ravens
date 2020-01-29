 const artSearchResultsDomManager = {
     artFactory(art) {
         return ` 
         <section class="artGeneral">
          <div>
         <h1 class="artsubTitle">Location: ${art[`location`]}</h1>
         
         <h1 class="artsubTitle">Artist Name: ${art[`first_name`]} ${art[`last_name`]}</h1>
         

        
         <h1 class="artsubTitle">Artwork: ${art.artwork}</h1>

        
         <h1 class="artsubTitle">Description</h1>
         <p class="artDescription">${art.description}</p>

         </div>

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

     }
}

