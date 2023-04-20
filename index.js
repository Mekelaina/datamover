"use strict";
const loc1 = '2712 W Main St, Waynesboro, VA 22980'; //Amazon WCH2
const loc2 = '1656 Old Greensboro Rd, Kernersville, NC 27284'; //GSO1 - Amazon Fulfillment Center
// sniped this key from mapquests example sourcecode..
// only using it till their support gets my keys working
const KEY = 'ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7';
const url = 'https://www.mapquestapi.com/directions/v2/route';
async function getTravelInfo(locA, locB) {
    var info;
    fetch(`${url}?key=${KEY}&from=${locA}&to=${locB}`)
        .then(res => res.json())
        .then(data => {
        info = [data["realTime"], data["distance"], data["formattedTime"]];
        return info;
    });
}
async function main() {
    let result = await getTravelInfo(loc1, loc2);
}
main().catch(console.log);
