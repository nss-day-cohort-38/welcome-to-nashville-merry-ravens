const apiBaseUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&`

const searchCriteriaRestaurant =  "Chinese"



//Searches Restaurants 

const apiManagerRestaurant = {
  searchRestaurants(searchCriteriaRestaurant) {
    const url = apiBaseUrl + `q=${searchCriteriaRestaurant}` + `&apikey=${apiKeys.Zomato}`
    return fetch(url).then(resp => resp.json());
  }
};

//const searchResultPromiseRestaurant = apiManagerRestaurant.searchRestaurants
//(searchCriteriaRestaurant);

//  searchResultPromise.then(searchResults => {
// console.log(searchResults);
// });


