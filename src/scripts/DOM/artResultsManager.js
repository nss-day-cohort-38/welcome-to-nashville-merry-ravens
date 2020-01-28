/*  const parkSearchResultsDomManager = {
    parkFactory(park) {
    console.log("parkFactory")
    return `
    <section>
    <h1>${park.park_name}</h1>
    </section>
    `
    }, 
    renderParkSearchResults(searchResults) {
    const container = document.querySelector("#resultsContainer");
    searchResults.forEach(park => {
    container.innerHTML += this.parkFactory(park)
    })
    } 
    }  
 */
 



 
/* Tester to make sure information is being passed 

 const artSearchResultsDomManager = {
     artFactory(art) {
         console.log(art)
     }
 }

 const criteria = "12 South"

 const searchResultPromise = artApiManager.searchArtLocations(criteria)
 searchResultPromise.then(searchResults => {
    artSearchResultsDomManager.artFactory(searchResults)
 })
 */