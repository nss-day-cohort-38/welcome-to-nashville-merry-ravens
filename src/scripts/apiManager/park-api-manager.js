const apiBaseUrl = `https://data.nashville.gov/resource/74d7-b74t.json?`

const parkSearchCriteria =  "Metro"

//Searches Restaurants 
const parksApiManager = {
  searchParks(searchCriteria) {
    const url = apiBaseUrl + `$q=${searchCriteria}`
    return fetch(url).then(resp => resp.json());
  }
};

const parksSearchResultPromise = parksApiManager.searchParks(searchCriteria);

// parksSearchResultPromise.then(searchResults => {
//     console.log(searchResults);
// });