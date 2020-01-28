const restaurantsResultsDomManager = {
    restaurantsFactory(restaurants, index) {
       // We use the “index” to make unique ids for each park
    return `
        <section id=“restaurants-${index}” class=“restaurant”>
        <div id=“restaurantName-${index}” class=“restaurant-name”>
            ${restaurants.name}
        </div>
        <div id=“restaurant-ethnicity-${index}” class=“restaurant-ethnicity”>
            ${restaurants.restaurant.cuisines}
        </div>
        <button id=“favorite-${index}” class="favorite-restaurant”>
            Favorite &#11088;
        </button>
        </section>
    `;
    },
    
    renderSearchResults(searchResults) {
        console.log(renderSearchResults)
    const container = document.querySelector("#resultsContainer");
    container.innerHTML = "";
    for (let i=0; i<searchResults.length; i++) {
        const currentResult = searchResults[i];
        container.innerHTML += this.restaurantsFactory(currentResult, i);
    }
    }
};
 // const parksApiManager = {
 //   searchParks(searchCriteria) {
 //     const url = parksApiBaseUrl + `$q=${searchCriteria}`
 //     return fetch(url).then(resp => resp.json());
 //   }
 // };
 // TODO: Adjust when Event & DOM Managers are working
const restaurantSearchResultPromise = apiManagerRestaurant.searchRestaurants(searchResults);
restaurantSearchResultPromise.then(searchResults => {
    restaurantsResultsDomManager.renderSearchResults(searchResults)
});
// restaurantsResultsDomManager.renderSearchResults(searchResults)