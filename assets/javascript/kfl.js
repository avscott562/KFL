
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
let kQuery = [];
let teQuery = [];

//array of top tight ends
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
		name:"Dallas Goedert",
		jersey:"88",
		team:"PHI",
		position:"TE",
		height:"6-5",
		weight:"256",
		dob:"1995-01-03",
		college:"South Dakota State"
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
		name:"Chris Herndon",
		jersey:"89",
		team:"NYJ",
		position:"TE",
		height:"6-4",
		weight:"253",
		dob:"1996-02-23",
		college:"Miami (FL)"
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
		name:"Zane Gonzalez",
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
		college:"Syracuse"
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
	  teams = response.NFLTeams;
	  console.log(teams);
});

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
	  byes = response;
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
	  quarterbacks = response.Players;
	  console.log(quarterbacks);
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
	  runningBacks = response.Players;
	  console.log(runningBacks);
});

//grab WRs from api
//variable to hold api query for RBs
let queryRBURL = "https://www.fantasyfootballnerd.com/service/players/json/test/WR";

//pulling data fron the api
$.ajax({
	url: queryRBURL,
	method: "GET"
})
  //after we get data from the api
  .then(function(response) {
	wideReceivers = response.Players;
	  console.log(wideReceivers);
});