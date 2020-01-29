const searchParkEventManager = {
    addParksSearchClickEventListener() {
        
        const button = document.getElementById("search-parks-btn");
        
        button.addEventListener("click", () => {
            
            const input = document.getElementById("search-parks");
            const searchCriteria = input.value;
            input.value = "";
            const searchParkResultPromise = parksApiManager.searchParks(searchCriteria);
                    searchParkResultPromise.then(searchResults => {
                        // console.log(searchResults) /*this is a place holder to later be passed to DOM manager*/
            })
        })
    }
}
        searchParkEventManager.addParksSearchClickEventListener()
        
        const searchArtEventManager = {
            addArtSearchClickEventListener() {
                
                const button = document.getElementById("search-art-btn");
                
                button.addEventListener("click", () => {
                    
                    const input = document.getElementById("search-art");
                    const searchCriteria = input.value;
                    input.value = "";
                    const searchArtResultPromise = artApiManager.searchArtLocations(searchCriteria);
                    searchArtResultPromise.then(searchResults => {
                        // console.log(searchResults) /*this is a place holder to later be passed to DOM manager*/
                        console.log(searchResults) /*this is a place holder to later be passed to DOM manager*/
                        artSearchResultsDomManager.renderSearchResults(searchResults)
                    
                })
            })
        }}
        searchArtEventManager.addArtSearchClickEventListener()
        
        const searchRestaurantEventManager = {
            addRestaurantSearchClickEventListener() {
                
                const button = document.getElementById("search-restaurants-btn");
                
                button.addEventListener("click", () => {
                    
                    const input = document.getElementById("search-restaurants");
                    const searchCriteria = input.value;
                    input.value = "";
                    const searchRestaurantsResultPromise = apiManagerRestaurant.searchRestaurants(searchCriteria);
                    searchRestaurantsResultPromise.then(searchResults => {
                        restaurantsResultsDomManager.renderSearchResults(searchResults);
                        // console.log(searchResults) /*this is a place holder to later be passed to DOM manager*/
                    
                })
            })
        }}
        searchRestaurantEventManager.addRestaurantSearchClickEventListener()

        const searchConcertsEventManager = {
            addConcertsSearchClickEventListener() {
                
                const button = document.getElementById("search-concerts-btn");
                
                button.addEventListener("click", () => {
                    
                    const input = document.getElementById("search-concerts");
                    const searchCriteria = input.value;
                    input.value = "";
                    const searchConcertsResultPromise = apiConcertManager.searchConcerts(searchCriteria);
                    searchConcertsResultPromise.then(searchResults => {
                        concertSearchResultsDomManager.renderSearchResults(searchResults);                    
                })
            })
        }
        }
        searchConcertsEventManager.addConcertsSearchClickEventListener()