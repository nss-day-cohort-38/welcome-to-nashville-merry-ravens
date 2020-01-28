const SearchResultsDomManager = {

    parkFactory(park, index) {
       console.log("ParkFactory");
   
       // We use the "index" to make unique ids for each park
       return `
         <section id="park-${index}" class="park">
           <div id="parkname-${index}" class="park-name">
             ${park.park_name}
           </div>
           <div id="park-feature-${index}" class="park-feature__featurename">
             ${park.mapped_location.human_address}
           </div>
           <button id="favorite-${index}" class="park__favorite">
             Favorite &#11088;
           </button>
         </section>
       `;
     },
     renderSearchResults(searchResults) {
   
       console.log("renderSearchResults");
   
       const container = document.querySelector("#resultsContainer");
       container.innerHTML = "";
   
       for (let i=0; i<searchResults.length; i++) {
         const currentResult = searchResults[i];
         container.innerHTML += this.parkFactory(currentResult, i);
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
 const parksSearchResultPromise = parksApiManager.searchParks(parkSearchCriteria);
 parksSearchResultPromise.then(searchResults => {
 
     console.log(searchResults);
     SearchResultsDomManager.renderSearchResults(searchResults)
 });