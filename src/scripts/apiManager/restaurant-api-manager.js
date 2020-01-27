const apiBaseUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&`

const searchCriteria =  "Chinese"



//Searches Restaurants 
const apiManager = {
  searchRestaurants(searchCriteria) {
    const url = apiBaseUrl + `q=${searchCriteria}` + `&apikey=${apiKeys.Zomato}`
    return fetch(url).then(resp => resp.json());
  }
};

const searchResultPromise = apiManager.searchRestaurants(searchCriteria);

//  searchResultPromise.then(searchResults => {
// console.log(searchResults);
// });


