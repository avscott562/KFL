
//Declare variables
//array of teams
let teams = [];
//array of bye weeks
let byes = [];
//5 positions needed - quarterback QB, wide receiver WR, running back RB, kicker K, tight end TE
//array of quarterbacks
let quarterbacks = [];
//array of running backs
let runningBacks = [];
//array of wide receivers
let wideReceivers = [];
//array of top tight ends
let tightEnds = [];
//array of kickers
let kickers = [];

jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});


//grab teams from api
//variable to hold api query for teams
let queryTeamsURL = "https://www.fantasyfootballnerd.com/service/nfl-teams/json/test";
//"https://www.fantasyfootballnerd.com/service/" + searchTerm + "/json/test";

//pulling data fron the api
$.ajax({
	url: queryTeamsURL,
	method: "GET"
})
  //after we get data from the api
  .then(function(response) {
      teams.push(response.NFLTeams);
    console.log(teams);
    console.log(response);
});

console.log(teams);

//grab bye weeks from api
//variable to hold api query for bye weeks
let queryByesURL = "https://www.fantasyfootballnerd.com/service/byes/json/test";

//pulling data fron the api
$.ajax({
	url: queryByesURL,
	method: "GET"
})
  //after we get data from the api
  .then(function(response) {
	  byes.push(response);
});
  
//grab QBs from api
//variable to hold api query for QBs
let queryQBURL = "https://www.fantasyfootballnerd.com/service/players/json/test/QB";

//pulling data fron the api
$.ajax({
	url: queryQBURL,
	method: "GET"
})
  //after we get data from the api
  .then(function(response) {
    quarterbacks.push(response.Players);
    console.log(response);
    console.log(quarterbacks[0][0]);

    // for (g=0; g<topQB.length; g++) {
    //   let top = quarterbacks[0].pop(topQB[g]);
    //     eligibleQB.push(top);
    //     g++;
    // }
    // console.log(eligibleQB);  
});

//grab RBs from api
//variable to hold api query for RBs
let queryRBURL = "https://www.fantasyfootballnerd.com/service/players/json/test/RB";

//pulling data fron the api
$.ajax({
	url: queryRBURL,
	method: "GET"
})
  //after we get data from the api
  .then(function(response) {
	  runningBacks.push(response.Players);
});

//grab WRs from api
//variable to hold api query for RBs
let queryWRURL = "https://www.fantasyfootballnerd.com/service/players/json/test/WR";

//pulling data fron the api
$.ajax({
	url: queryWRURL,
	method: "GET"
})
  //after we get data from the api
  .then(function(response) {
	wideReceivers.push(response.Players);
});

//grab TEs from api
//variable to hold api query for RBs
let queryTEURL = "https://www.fantasyfootballnerd.com/service/players/json/test/TE";

//pulling data fron the api
$.ajax({
	url: queryTEURL,
	method: "GET"
})
  //after we get data from the api
  .then(function(response) {
	tightEnds.push(response.Players);
});


//grab Ks from api
//variable to hold api query for RBs
let queryKURL = "https://www.fantasyfootballnerd.com/service/players/json/test/K";

//pulling data fron the api
$.ajax({
	url: queryKURL,
	method: "GET"
})
  //after we get data from the api
  .then(function(response) {
	kickers.push(response.Players);
});


// for (g=0; g<quarterbacks.length; g++) {
//   // if (quarterbacks[0][g].displayName === "Andrew Luck") {
//   //   console.log(quarterbacks[0][g]);
//   //   g++;
//   // }

//   console.log(quarterbacks[g]);
//     g++;
// }

console.log(quarterbacks[0]);