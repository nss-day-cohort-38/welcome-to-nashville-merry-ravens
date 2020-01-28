const artUrl = "https://data.nashville.gov/resource/eviu-nxp6.json?"

const artApiManager = {
        searchArtLocations(searchArtCriteria) {
        const url = artUrl + `$q=${searchArtCriteria}`;
        return fetch(url).then(resp => resp.json())
    }
}