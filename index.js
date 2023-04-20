"use strict";
const loc1 = '2712 W Main St, Waynesboro, VA 22980'; //Amazon WCH2
const loc2 = '1656 Old Greensboro Rd, Kernersville, NC 27284'; //GSO1 - Amazon Fulfillment Center
// sniped this key from mapquests example sourcecode..
// only using it till their support gets my keys working
const KEY = 'ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7';
const url = 'https://www.mapquestapi.com/directions/v2/route';
async function fetchTravelInfoJSON(locA, locB) {
    const response = await fetch(`${url}?key=${KEY}&from=${locA}&to=${locB}`);
    const info = await response.json();
    return info;
}
var traveldata = [];
fetchTravelInfoJSON(loc1, loc2).then(info => {
    info; //fetched info
    traveldata = [info["realTime"], info["distance"], info["formattedTime"]];
});
console.log(traveldata);
