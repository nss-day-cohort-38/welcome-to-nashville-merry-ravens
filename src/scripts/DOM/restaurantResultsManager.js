let restaurant_id = 0;

const restaurantsResultsDomManager = {
    restaurantFactory(restaurant) {
        restaurant_id ++;
        return `
        <section class="restaurant">
        <div>
            <div class="restuarant-name" id="restaurant--${restaurant_id}">${restaurant.restaurant.name}</div>
            <div class="restaurant-location">${restaurant.restaurant.location.address}</div>
            <button id="restaurant-button-${restaurant_id}" class="restaurant-save">Save</button>
        </div>
        </section>
            `
        },
        renderSearchResults(searchResults) {
            const restaurants = searchResults.restaurants
            const container = document.querySelector("#resultsContainer");
            container.innerHTML = "<h2>Restaurant Results</h2>"
            if(restaurants.length >= 1) {
            restaurants.forEach(restaurant => {
                container.innerHTML += this.restaurantFactory(restaurant);
            })} else {
                container.innerHTML += "<p>No results available</p>"
            }
            this.addSaveEventListener();
        },
        addSaveEventListener(){
        const buttons = document.querySelectorAll(".restaurant-save")
        buttons.forEach(button =>{
            button.addEventListener("click", (e) => {
                const buttonId = e.target.id;
                const sectionId = buttonId.split("-")[2]; 
                this.saveItinerary(sectionId);
            })
        })
    },
    saveItinerary(sectionId){
        const container = document.getElementById("restaurantsItineraryContainer");
        const section = document.getElementById(`restaurant--${sectionId}`);
        container.innerHTML = `Restaurant: ` + section.innerHTML;
    }
}


