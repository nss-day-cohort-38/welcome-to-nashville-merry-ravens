    const apiConcertUrl = "https://app.ticketmaster.com/discovery/v2/events.json?";
    
    const apiManager = {
        searchConcerts(searchCriteria) {
            const criteria = encodeURIComponent(`"%${searchCriteria}%"`);
            const url = apiConcertUrl + `$where=type like ${criteria}` + `apikey=${apiKeys.TicketMaster}`;
            return fetch(url).then(resp => resp.json());
        }
    }; 
    console.log(apiManager.searchConcerts("event"))
