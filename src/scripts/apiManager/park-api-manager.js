const parksApiBaseUrl = `https://data.nashville.gov/resource/74d7-b74t.json?`

// TODO: Integrate into Event & DOM Managers
const parkSearchCriteria =  "Metro"

//Searches Restaurants 
const parksApiManager = {
  searchParks(searchCriteria) {
    const url = parksApiBaseUrl + `$q=${searchCriteria}`
    return fetch(url).then(resp => resp.json());
  }
};

// TODO: Adjust when Event & DOM Managers are working
// const parksSearchResultPromise = parksApiManager.searchParks(parkSearchCriteria);

// parksSearchResultPromise.then(searchResults => {
//     console.log(searchResults);
// });