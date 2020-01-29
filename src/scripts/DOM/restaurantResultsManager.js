let restaurant_id = 0;

const restaurantsResultsDomManager = {
    restaurantFactory(restaurant) {
        restaurant_id ++;
        return `
        <section class="restaurant" id="restaurant--${restaurant_id}>
        <div>
            <div class="restuarant-name>${restaurant.restaurant.name}</div>
            <div class="restaurant-location">${restaurant.restaurant.location.address}
            </div>
            </section>
            `
        },
        renderSearchResults(searchResults) {
            const restaurants = searchResults.restaurants
            const container = document.querySelector("#resultsContainer");
            container.innerHTML = "<h2>Restaurant Results</h2>"
            restaurants.forEach(restaurant => {
                container.innerHTML += this.restaurantFactory(restaurant);
            })
        }}