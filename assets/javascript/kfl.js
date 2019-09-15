// let client : new JSO({
// 	providerID: "google",
// 	client_id: "541950296471.apps.googleusercontent.com",
// 	redirect_uri: "http://localhost:8080/", // The URL where you is redirected back, and where you perform run the callback() function. The URI that the user will be redirected back to when completed. This should be the same URL that the page is presented on.
// 	authorization: "https://accounts.google.com/o/oauth2/auth",
// 	scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
// })

// var runningBacks : ["D.J. Foster", "Chase Edmonds", "David Johnson"];

// var kickers : ["Zane Gonzales", ];
//Declare variables
//array of teams
let teams = ["Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Gians", "New York Jets", "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers", "San Franciso 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Redskins"];
//5 positions needed - quarterback QB, wide receiver WR, running back RB, kicker K, tight end TE
//array of top 32 quarterbacks
let quarterbacks = [
	
	{
		name: "Josh Allen",
		jersey: "17",
		team: "BUF",
		position:"QB",
		height: "6-5",
		weight: "237",
		dob: "1996-05-21",
		college: "Wyoming"
	},
	{
		name: "Tom Brady",
		jersey:"12",
		team:"NE",
		position:"QB",
		height:"6-4",
		weight:"225",
		dob:"1977-08-03",
		college:"Michigan"
	},
	{
		name: "Drew Brees",
		jersey:"9",
		team:"NO",
		position:"QB",
		height:"6-0",
		weight:"209",
		dob:"1979-01-15",
		college:"Purdue"
	},
	{
		name: "Jacoby Brissett",
		jersey:"7",
		team:"IND",
		position:"QB",
		height:"6-4",
		weight:"238",
		dob:"1992-12-11",
		college:"North Carolina State"
	},
	{
		name: "Derek Carr",
		jersey:"4",
		team:"OAK",
		position:"QB",
		height:"6-3",
		weight:"210",
		dob:"1991-03-28",
		college:"Fresno State"
	},
	{
		name: "Kirk Cousins",
		jersey:"8",
		team:"MIN",
		position:"QB",
		height:"6-3",
		weight:"202",
		dob:"1988-08-19",
		college:"Michigan State"
	},
	{
		name: "Andy Dalton",
		jersey:"14",
		team:"CIN",
		position:"QB",
		height:"6-2",
		weight:"220",
		dob:"1987-10-29",
		college:"TCU"
	},
	{
		name: "Sam Darnold",
		jersey:"14",
		team:"NYJ",
		position:"QB",
		height:"6-3",
		weight:"225",
		dob:"1997-06-05",
		college:"USC"
	},
	{
		name:"Ryan Fitzpatrick",
		jersey:"14",
		team:"MIA",
		position:"QB",
		height:"6-2",
		weight:"228",
		dob:"1982-11-24",
		college:"Harvard"
	},
	{
		name:"Joe Flacco",
		jersey:"5",
		team:"DEN",
		position:"QB",
		height:"6-6",
		weight:"245",
		dob:"1985-01-16",
		college:"Delaware"
	},
	{
		name:"Nick Foles",
		jersey:"7",
		team:"JAC",
		position:"QB",
		height:"6-6",
		weight:"243",
		dob:"1989-01-20",
		college:"Arizona"
	},
	{
		name: "Jimmy Garoppolo",
		jersey:"10",
		team:"SF",
		position:"QB",
		height:"6-2",
		weight:"225",
		dob:"1991-11-02",
		college:"Eastern Illinois"
	},
	{
		name: "Jared Goff",
		jersey:"16",
		team:"LAR",
		position:"QB",
		height:"6-4",
		weight:"222",
		dob:"1994-10-14",
		college:"California"
	},
	{
		name:"Dwayne Haskins",
		jersey:"7",
		team:"WAS",
		position:"QB",
		height:"6-4",
		weight:"231",
		dob:"1997-05-03",
		college:"Ohio State"
	},
	{
		name: "Lamar Jackson",
		jersey:"8",
		team:"BAL",
		position:"QB",
		height:"6-2",
		weight:"212",
		dob:"1997-01-07",
		college:"Louisville"
	},
	{
		name: "Patrick Mahomes",
		jersey:"15",
		team:"KC",
		position:"QB",
		height:"6-3",
		weight:"230",
		dob:"1995-09-17",
		college:"Texas Tech"
	},
	{
		name:"Eli Manning",
		jersey:"10",
		team:"NYG",
		position:"QB",
		height:"6-5",
		weight:"218",
		dob:"1981-01-03",
		college:"Ole Miss"
	},
	{
		name:"Marcus Mariota",
		jersey:"8",
		team:"TEN",
		position:"QB",
		height:"6-4",
		weight:"222",
		dob:"1993-10-30",
		college:"Oregon"
	}
	{
		name: "Baker Mayfield",
		jersey:"6",
		team:"CLE",
		position:"QB",
		height:"6-1",
		weight:"215",
		dob:"1995-04-14",
		college:"Oklahoma"
	},
	{
		name:"Kyler Murray",
		jersey:"1",
		team:"ARI",
		position:"QB",
		height:"5-10",
		weight:"207",
		dob:"1997-08-07",
		college:"Oklahoma"
	},
	{
		name: "Cam Newton",
		jersey:"1",
		team:"CAR",
		position:"QB",
		height:"6-5",
		weight:"245",
		dob:"1989-05-11",
		college:"Auburn"
	},
	{
		name:"Dak Prescott",
		jersey:"4",
		team:"DAL",
		position:"QB",
		height:"6-2",
		weight:"235",
		dob:"1993-07-29",
		college:"Mississippi State"
	},
	{
		name: "Philip Rivers",
		jersey:"17",
		team:"LAC",
		position:"QB",
		height:"6-5",
		weight:"228",
		dob:"1981-12-08",
		college:"North Carolina State"
	},
	{
		name: "Aaron Rodgers",
		jersey:"12",
		team:"GB",
		position:"QB",
		height:"6-2",
		weight:"225",
		dob:"1983-12-02",
		college:"California"
	},
	{
		name: "Ben Roethlisberger",
		jersey:"7",
		team:"PIT",
		position:"QB",
		height:"6-5",
		weight:"240",
		dob:"1982-03-02",
		college:"Miami (OH)"
	},
	{
		name: "Matt Ryan",
		jersey:"2",
		team:"ATL",
		position:"QB",
		height:"6-4",
		weight:"217",
		dob:"1985-05-17",
		college:"Boston College"
	},
	{
		name:"Matthew Stafford",
		jersey:"9",
		team:"DET",
		position:"QB",
		height:"6-3",
		weight:"220",
		dob:"1988-02-07",
		college:"Georgia"
	},
	{
		name:"Mitchell Trubisky",
		jersey:"10",
		team:"CHI",
		position:"QB",
		height:"6-3",
		weight:"222",
		dob:"1994-08-20",
		college:"North Carolina"
	},
	{
		name:"Deshaun Watson",
		jersey:"4",
		team:"HOU",
		position:"QB",
		height:"6-2",
		weight:"215",
		dob:"1995-09-14",
		college:"Clemson"
	},
	{
		name: "Carson Wentz",
		jersey:"11",
		team:"PHI",
		position:"QB",
		height:"6-5",
		weight:"237",
		dob:"1992-12-30",
		college:"North Dakota State"
	},
	{
		name: "Russell Wilson",
		jersey:"3",
		team:"SEA",
		position:"QB",
		height:"5-11",
		weight:"215",
		dob:"1988-11-29",
		college:"Wisconsin"
	},
	{
		name: "Jameis Winston",
		jersey:"3",
		team:"TB",
		position:"QB",
		height:"6-4",
		weight:"231",
		dob:"1994-01-06",
		college:"Florida State"
	}
	
];

//array of running backs
let runningBacks : [];

//array of tight ends
let tightEnds : [];

//array of kickers
let kickers : [];

//variable to hold api query
let queryURL : "https://www.fantasyfootballnerd.com/service/nfl-teams/json/test";
//"https://www.fantasyfootballnerd.com/service/" + searchTerm + "/json/test";

//pulling data fron the api
$.ajax({
	url: queryURL,
	method: "GET"
})
  //after we get data from the api
  .then(function(response) {
	  console.log(response);
  });
