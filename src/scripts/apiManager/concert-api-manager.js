    const apiConcertUrl = "https://app.ticketmaster.com/discovery/v2/events.json?";
    
    const apiConcertManager = {
        searchConcerts(searchCriteria) {
            const url = apiConcertUrl + `$classificationName=music&marketId=31` + 
            `&keyword=${searchCriteria}` + 
            `&apikey=${apiKeys.TicketMaster}`;
            
            return fetch(url).then(resp => resp.json());
        },
        saveConcert(sectionId) {
            const section = document.getElementById(`concert--${sectionId}`);
            const concertName = section.innerText
            // console.log("Concert Name:", concertName);
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({"concert": `${concertName}`});
        
            const requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
        
            fetch("http://localhost:8088/itinerary/?id=1", requestOptions)
            .then(response => response.text())
            // .then(result => console.log(result))
            // .catch(error => console.log('error', error));
        }
    }; 
    // console.log(apiConcertManager.searchConcerts("top"))