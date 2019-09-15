// let client = new JSO({
// 	providerID: "google",
// 	client_id: "541950296471.apps.googleusercontent.com",
// 	redirect_uri: "http://localhost:8080/", // The URL where you is redirected back, and where you perform run the callback() function. The URI that the user will be redirected back to when completed. This should be the same URL that the page is presented on.
// 	authorization: "https://accounts.google.com/o/oauth2/auth",
// 	scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
// })

//5 positions needed - quarterback QB, wide receiver WR, running back RB, kicker K, tight end TE

// var teams = ["Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Gians", "New York Jets", "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers", "San Franciso 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Redskins"];

// var quarterbacks = ["Brett Hundley", "Kyler Murray"];

// var runningBacks = ["D.J. Foster", "Chase Edmonds", "David Johnson"];

// var kickers = ["Zane Gonzales", ];
//Declare variables
let teams = [];
let quarterbacks = [];
let runningBacks = [];
let tightEnds = [];
let kickers = [];

//variable to hold api query
let queryURL = "https://www.fantasyfootballnerd.com/service/nfl-teams/json/test";
//"https://www.fantasyfootballnerd.com/service/" + searchTerm + "/json/test";

//pulling data fron the api
$.ajax({
	url: queryURL,
	method: GET
})
  //after we get data from the api
  .then(function(response) {

  });
