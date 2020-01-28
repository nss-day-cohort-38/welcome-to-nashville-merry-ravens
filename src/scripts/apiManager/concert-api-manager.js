    const apiConcertUrl = "https://app.ticketmaster.com/discovery/v2/events.json?";
    
    const apiConcertManager = {
        searchConcerts(searchCriteria) {
            const url = apiConcertUrl + `$classificationName=music&marketId=31` + 
            `&keyword=${searchCriteria}` + 
            `&apikey=${apiKeys.TicketMaster}`;
            
            return fetch(url).then(resp => resp.json());
        }
    }; 
    // console.log(apiConcertManager.searchConcerts("top"))