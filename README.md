# Welcome to Nashville: an Itinerary for a day trip to Music City
a group project by:
- [Matt Reeds](https://github.com/MReeds)
- [Sofia Candiani](https://github.com/sncandiani)
- [Roxanne Nasraty](https://github.com/rsnasraty)
- [Keith Potempa](https://github.com/divinerankzero)

In this app users can search for four different things to do/visit in Nashville:
* parks -- using the Nashville [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/xbru-cfzi)
* public art collections -- using Nashville [Metro Gov API](https://dev.socrata.com/foundry/data.nashville.gov/eviu-nxp6)
* restaurants -- using the [Zomato API](https://developers.zomato.com/api)
* concerts -- using the [Ticketmaster API](https://developer.ticketmaster.com/products-and-docs/apis/getting-started/)


## Build Instructions
In terminal:
1. `git clone git@github.com:nss-day-cohort-38/welcome-to-nashville-merry-ravens.git`
1. `hs -o src/`

In the browser window that opens:
1. Type search criteria into any search bar and click the search button 
1. In the results printed to the DOM, clicking on the "Save" button for a single result will save it to the Itinerary


## SKills Utilized

We utilized all skills and concepts learned up to this point in our time here at NSS:

1. Functions
1. Persistent data storage
1. Github
1. CSS
1. Building DOM components
1. Handling user events
1. Modular code
1. Semantic HTML
1. [Valid HTML5](https://validator.w3.org/)

## Itinerary Builder

When the user searches for any of the four categories of things to do, the results are listed in the DOM. Each result item has a button to add the item to the current itinerary.

