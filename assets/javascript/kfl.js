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
let runningBacks = [];

//array of tight ends
let tightEnds = [

	{
		name:"Mark Andrews",
		jersey:"89",
		team:"BAL",
		position:"TE",
		height:"6-4",
		weight:"256",
		dob:"1995-09-06",
		college:"Oklahoma"
	},
	{
		name:"Trey Burton",
		jersey:"80",
		team:"CHI",
		position:"TE",
		height:"6-3",
		weight:"235",
		dob:"1991-10-29",
		college:"Florida"
	},
	{
		name:"Jared Cook",
		jersey:"87",
		team:"NO",
		position:"TE",
		height:"6-5",
		weight:"254",
		dob:"1987-04-07",
		college:"South Carolina"
	},
	{
		name:"Jack Doyle",
		jersey:"84",
		team:"IND",
		position:"TE",
		height:"6-6",
		weight:"262",
		dob:"1990-05-05",
		college:"Western Kentucky"
	},
	{
		name:"Eric Ebron",
		jersey:"85",
		team:"IND",
		position:"TE",
		height:"6-4",
		weight:"253",
		dob:"1993-04-10",
		college:"North Carolina"
	},
	{
		name:"Evan Engram",
		jersey:"88",
		team:"NYG",
		position:"TE",
		height:"6-3",
		weight:"240",
		dob:"1994-09-02",
		college:"Ole Miss"
	},
	{
		name: "Zach Ertz",
		jersey:"86",
		eam:"PHI",
		position:"TE",
		height:"6-5",
		weight:"250",
		dob:"1990-11-10",
		college:"Stanford"
	},
	{
		name:"Jimmy Graham",
		jersey:"80",
		team:"GB",
		position:"TE",
		height:"6-7",
		weight:"265",
		dob:"1986-11-24",
		college:"Miami (FL)"
	},
	{
		name:"Hunter Henry",
		jersey:"86",
		team:"LAC",
		position:"TE",
		height:"6-5",
		weight:"250",
		dob:"1994-12-07",
		college:"Arkansas"
	},
	{
		name:"TJ Hockenson",
		jersey:"88",
		team:"DET",
		position:"TE",
		height:"6-5",
		weight:"251",
		dob:"1997-07-03",
		college:"Iowa"
	},
	{
		name:"Austin Hooper",
		jersey:"81",
		team:"ATL",
		position:"TE",
		height:"6-3",
		weight:"254",
		dob:"1994-10-29",
		college:"Stanford"
	},
	{
		name:"O.J. Howard",
		jersey:"80",
		team:"TB",
		position:"TE",
		height:"6-6",
		weight:"251",
		dob:"1994-11-19",
		college:"Alabama"
	},
	{
		name:"Travis Kelce",
		jersey:"87",
		team:"KC",
		position:"TE",
		height:"6-5",
		weight:"260",
		dob:"1989-10-05",
		college:"Cincinnati"
	},
	{
		name:"George Kittle",
		jersey:"85",
		team:"SF",
		position:"TE",
		height:"6-4",
		weight:"250",
		dob:"1993-10-09",
		college:"Iowa"
	},
	{
		name:"Vance McDonald",
		jersey:"89",
		team:"PIT",
		position:"TE",
		height:"6-4",
		weight:"267",
		dob:"1990-06-13",
		college:"Rice"
	},
	{
		name:"David Njoku",
		jersey:"85",
		team:"CLE",
		position:"TE",
		height:"6-4",
		weight:"246",
		dob:"1996-07-10",
		college:"Miami (FL)"
	},
	{
		name:"Greg Olsen",
		jersey:"88",
		team:"CAR",
		position:"TE",
		height:"6-5",
		weight:"255",
		dob:"1985-03-11",
		college:"Miami (FL)"
	},
	{
		name:"Jordan Reed",
		jersey:"86",
		team:"WAS",
		position:"TE",
		height:"6-2",
		weight:"242",
		dob:"1990-07-03",
		college:"Florida"
	},
	{
		name:"Kyle Rudolph",
		jersey:"82",
		team:"MIN",
		position:"TE",
		height:"6-6",
		weight:"265",
		dob:"1989-11-09",
		college:"Notre Dame"
	},
	{
		name:"Delanie Walker",
		jersey:"82",
		team:"TEN",
		position:"TE",
		height:"6-2",
		weight:"248",
		dob:"1984-08-12",
		college:"Central Missouri State"
	}

];

//array of kickers
let kickers = [

	{
		name:"Mike Badgley",
		team:"LAC",
		position:"K",
		height:"5-10",
		weight:"183",
		dob:"1995-07-28",
		college:"Miami (FL)"
	},
	{
		name:"Dan Bailey",
		jersey:"5",
		team:"MIN",
		position:"K",
		height:"6-0",
		weight:"190",
		dob:"1988-01-26",
		college:"Oklahoma State"
	},
	{
		name:"Taylor Bertolet",
		jersey:"1",
		team:"NYJ",
		position:"K",
		height:"5-9",
		weight:"188",
		dob:"1992-10-24",
		college:"Texas A&amp;M"
	},
	{
		name:"Chris Blewitt",
		jersey:"12",
		team:"CHI",
		position:"K",
		height:"5-9",
		weight:"190",
		dob:"1995-05-02",
		college:"Pittsburgh"
	},
	{
		name:"Chris Boswell",
		jersey:"9",
		team:"PIT",
		position:"K",
		height:"6-2",
		weight:"185",
		dob:"1991-03-16",
		college:"Rice"
	},
	{
		name:"Jon Brown",
		team:"SF",
		position:"K",
		height:"5-10",
		weight:"194",
		dob:"1992-12-07",
		college:"Louisville"
	},
	{
		name:"Matt Bryant",
		jersey:"3",
		team:"ATL",
		position:"K",
		height:"5-9",
		weight:"203",
		dob:"1975-05-29",
		college:"Baylor"
	},
	{
		name:"Randy Bullock",
		jersey:"4",
		team:"CIN",
		position:"K",
		height:"5-9",
		weight:"210",
		dob:"1989-12-16",
		college:"Texas A&amp;M"
	},
	{
		name:"Harrison Butker",
		jersey:"7",
		team:"KC",
		position:"K",
		height:"6-4",
		weight:"205",
		dob:"1995-07-14",
		college:"Georgia Tech"
	},
	{
		name:"Daniel Carlson",
		jersey:"8",
		team:"OAK",
		position:"K",
		height:"6-5",
		weight:"215",
		dob:"1995-01-23",
		college:"Auburn"
	},
	{
		name:"Chandler Catanzaro",
		jersey:"7",
		team:"NYJ",
		position:"K",
		height:"6-3",
		weight:"200",
		dob:"1991-02-26",
		college:"Clemson"
	},
	{
		name:"Mason Crosby",
		jersey:"2",
		team:"GB",
		position:"K",
		height:"6-1",
		weight:"207",
		dob:"1984-09-03",
		college:"Colorado"
	},
	{
		name:"Jake Elliott",
		jersey:"4",
		team:"PHI",
		position:"K",
		height:"5-9",
		weight:"167",
		dob:"1995-01-21",
		college:"Memphis"
	},
	{
		name:"Ka'imi Fairbairn",
		jersey:"7",
		team:"HOU",
		position:"K",
		height:"6-0",
		weight:"183",
		dob:"1994-01-29",
		college:"UCLA"
	},
	{
		name:"Sam Ficken",
		jersey:"7",
		team:"NYJ",
		position:"K",
		height:"6-1",
		weight:"192",
		dob:"1992-12-14",
		college:"Penn State"
	},
	{
		name:"Elliott Fry",
		jersey:"8",
		team:"CHI",
		position:"K",
		height:"6-0",
		weight:"189",
		dob:"1994-12-12",
		college:"South Carolina"
	},
	{
		name:"Matt Gay",
		jersey:"9",
		team:"TB",
		position:"K",
		height:"6-0",
		weight:"232",
		dob:"1994-03-15",
		college:"Utah"
	},
	{
		name:"Zane Gonzalez"
		jersey:"5",
		team:"ARI",
		position:"K",
		height:"6-0",
		weight:"202",
		dob:"1995-05-07",
		college:"Arizona State"
	},
	{
		name:"Stephen Gostkowski",
		jersey:"3",
		team:"NE",
		position:"K",
		height:"6-1",
		weight:"215",
		dob:"1984-01-28",
		college:"Memphis"
	},
	{
		name:"Robbie Gould",
		jersey:"9",
		team:"SF",
		position:"K",
		height:"6-0",
		weight:"190",
		dob:"1982-12-06",
		college:"Penn State"
	},
	{
		name:"Steven Hauschka",
		jersey:"4",
		team:"BUF",
		position:"K",
		height:"6-4",
		weight:"210",
		dob:"1985-06-29",
		college:"North Carolina State"
	},
	{
		name:"Cole Hedlund",
		jersey:"9",
		team:"IND",
		position:"K",
		height:"5-9",
		weight:"162",
		dob:"1995-03-15",
		college:"North Texas"
	},
	{
		name:"Dustin Hopkins",
		jersey:"3",
		team:"WAS",
		position:"K",
		height:"6-2",
		weight:"205",
		dob:"1990-10-01",
		college:"Florida State"
	},
	{
		name:"Redford Jones",
		jersey:"19",
		team:"CHI",
		position:"K",
		height:"5-10",
		weight:"174",
		dob:"1994-07-05",
		college:"Tulsa"
	},
	{
		name:"Greg Joseph",
		jersey:"17",
		team:"CLE",
		position:"K",
		height:"6-0",
		weight:"208",
		dob:"1994-08-04",
		college:"Florida Atlantic"
	},
	{
		name:"Josh Lambo",
		jersey:"4",
		team:"JAC",
		position:"K",
		height:"6-0",
		weight:"215",
		dob:"1990-11-19",
		college:"Texas A&amp;M"
	},
	{
		name:"Ty Long",
		jersey:"1",
		team:"LAC",
		position:"K",
		height:"6'2",
		weight:"205",
		dob:"1993-04-06",
		college:"UAB"
	},
	{
		name:"Wil Lutz",
		jersey:"3",
		team:"NO",
		position:"K",
		height:"5-11",
		weight:"184",
		dob:"1994-07-07",
		college:"Georgia State"
	},
	{
		name:"Brett Maher",
		jersey:"2",
		team:"DAL",
		position:"K",
		height:"6-0",
		weight:"190",
		dob:"1989-11-21",
		college:"Nebraska"
	},
	{
		name:"Matt McCrane",
		jersey:"3",
		team:"PIT",
		position:"K",
		height:"5-10",
		weight:"165",
		dob:"1994-09-08",
		college:"Kansas State"
	},
	{
		name:"Chase McLaughlin",
		jersey:"18",
		team:"BUF",
		position:"K",
		height:"6-0",
		weight:"190",
		dob:"1996-04-09",
		college:"Illinois"
	},
	{
		name:"Brandon McManus",
		jersey:"8",
		team:"DEN",
		position:"K",
		height:"6-3",
		weight:"201",
		dob:"1991-07-25",
		college:"Temple"
	},
	{
		name:"Cole Murphy",
		jersey:"48",
		team:"ARI",
		position:"K",
		height:"6-3",
		weight:"193",
		dob:"1996-04-01",
		college:"Syracuse"/>
	},
	{
		name:"Jason Myers",
		jersey:"5",
		team:"SEA",
		position:"K",
		height:"5-10",
		weight:"190",
		dob:"1991-05-12",
		college:"Marist"
	},
	{
		name:"Eddy Pineiro",
		jersey:"15",
		team:"CHI",
		position:"K",
		height:"6-0",
		weight:"185",
		dob:"1995-09-13",
		college:"Florida"
	},
	{
		name:"Matt Prater",
		jersey:"5",
		team:"DET",
		position:"K",
		height:"5-10",
		weight:"201",
		dob:"1984-08-10",
		college:"UCF"
	},
	{
		name:"Aldrick Rosas",
		jersey:"2",
		team:"NYG",
		position:"K",
		height:"6-3",
		weight:"233",
		dob:"1994-12-30",
		college:"Southern Oregon"
	},
	{
		name:"Jason Sanders",
		jersey:"7",
		team:"MIA",
		position:"K",
		height:"5-11",
		weight:"186",
		dob:"1995-11-16",
		college:"New Mexico"
	},
	{
		name:"Cairo Santos",
		team:"TEN",
		position:"K",
		height:"5-8",
		weight:"160",
		dob:"1991-11-18",
		college:"Tulane"
	},
	{
		name:"Austin Seibert",
		jersey:"2",
		team:"CLE",
		position:"K",
		height:"5-9",
		weight:"211",
		dob:"1996-11-15",
		college:"Oklahoma"
	},
	{
		name:"Joey Slye",
		jersey:"4",
		team:"CAR",
		position:"K",
		height:"5-11",
		weight:"213",
		dob:"1996-04-10",
		college:"Virginia Tech"
	},
	{
		name:"Ryan Succop",
		jersey:"4",
		team:"TEN",
		position:"K",
		height:"6-2",
		weight:"218",
		dob:"1986-09-19",
		college:"South Carolina"
	},
	{
		name:"Justin Tucker",
		jersey:"9",
		team:"BAL",
		position:"K",
		height:"6-1",
		weight:"183",
		dob:"1989-11-21",
		college:"Texas"
	},
	{
		name:"Kaare Vedvik",
		jersey:"7",
		team:"NYJ",
		position:"K",
		height:"6-3",
		weight:"210",
		dob:"1994-03-16",
		college:"Marshall"
	},
	{
		name:"Adam Vinatieri",
		jersey:"4",
		team:"IND",
		position:"K",
		height:"6-0",
		weight:"212",
		dob:"1972-12-28",
		college:"South Dakota State"
	},
	{
		name:"Matthew Wright",
		jersey:"16",
		team:"PIT",
		position:"K",
		height:"6-0",
		weight:"179",
		dob:"1996-03-22",
		college:"UCF"
	},
	{
		name:"Greg Zuerlein",
		jersey:"4",
		team:"LAR",
		position:"K",
		height:"6-0",
		weight:"191",
		dob:"1987-12-27",
		college:"Missouri Western"
	}

];

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
