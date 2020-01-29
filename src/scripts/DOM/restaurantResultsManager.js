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
            if(restaurants.length >= 1) {
            restaurants.forEach(restaurant => {
                container.innerHTML += this.restaurantFactory(restaurant);
            })} else {
                container.innerHTML += "<p>No results available</p>"
            }
            this.listenerSaveItinerary(`save--${restaurant_id}`);
        },
        
    },
{
        const button = document.getElementById(buttonId);
        button.addEventListener("click", () => {
            const sectionId = buttonId.split("-")[2]
            console.log(sectionId)
        })
    }
//     listenerSaveItinerary(buttonId){
//         const button = document.getElementById(buttonId);
//         button.addEventListener("click", () => {
//             const sectionId = buttonId.split("-")[2]; // This grabs the concertId from the button
//             // console.log(sectionId); 
//             this.saveItinerary(sectionId);
            
//         })
//     },
//     saveItinerary(sectionId){
//         const container = document.getElementById("concertsItineraryContainer");
//         // console.log(container)
//         const section = document.getElementById(`concert--${sectionId}`);
//         // console.log(section);
//         container.innerHTML = `<h3>Favorite Restaurant:</h2>` + section.innerHTML;
//     }
// }