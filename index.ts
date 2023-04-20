const loc1 = '2712 W Main St, Waynesboro, VA 22980'; //Amazon WCH2
const loc2 = '1656 Old Greensboro Rd, Kernersville, NC 27284' //GSO1 - Amazon Fulfillment Center

const KEY = 'WOOm9BsTrflfVpN5PJw9sLtj5DQsfGgB';

const url = 'https://www.mapquestapi.com/directions/v2/route';

/* function getTravelTime(locA: string, locB: string){
    fetch(`${url}?key=${KEY}&from=${locA}&to=${locB}`).then(function(response) {        console.log('Success!');
        //return 0;
    }).then(function(data) {
        console.log(data);
        //return 0;
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
        //return 0;
    });
} */

//getTravelTime(loc1, loc2);

fetch(`https://www.mapquestapi.com/directions/v2/route?key=WOOm9BsTrflfVpN5PJw9sLtj5DQsfGgB&from=Clarendon+Blvd,Arlington,VA&to=2400+S+Glebe+Rd,+Arlington,+VA`).then(function(response) {        console.log('Success!');
        //return 0;
    }).then(function(data) {
        console.log(data);
        //return 0;
    }).catch(function (err) {
        console.warn('Something went wrong.', err);
        //return 0;
    });