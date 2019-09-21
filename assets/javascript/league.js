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
	  teams = response.NFLTeams;
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
	wideReceivers = response.Players;
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
	tightEnds = response.Players;
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
	kickers = response.Players;
});

  
  var leagues = [
    {
      name: "Football Heroes",
      description: "description of Football Heroes league",
      teams: ["Football Geek", "Pig Skin Rules", "Steelers Fan"]
    },
    {
      name: "Football Legends",
      description: "description of Football Legends league",
      teams: ["Dallas Reigns", "Raider Nation", "Pro Bowler"]
    },
    {
      name: "The Real MVPs",
      description: "description of The Real MVPs league",
      teams: ["Pro Baller", "Ben's Place", "Larry's Squad"]
    },
    {
      name: "The Brady Bunch",
      description: "description of Brady Bunch league",
      teams: ["Patriot", "Bean Town", "Alex's Team'"]
    }
  ];

  var testData = [
    {
      player: "Ben Roethlisberger",
      position: "QB",
      touchdowns: 2,
      catches: 0,
      rushYds: 5,
      fumble: 1,
      interception: 0,
      tackle: 0,
      sacks: 0,
      dTouchdowns: 0,
      safety: 0,
      xPt: 0,
      fGoalLess: 0,
      fGoalMore: 0
    },
    {
      player: "Tom Brady",
      position: "QB",
      touchdowns: 2,
      catches: 0,
      rushYds: 5,
      fumble: 1,
      interception: 0,
      tackle: 0,
      sacks: 0,
      dTouchdowns: 0,
      safety: 0,
      xPt: 0,
      fGoalLess: 0,
      fGoalMore: 0
    },
    {
      player: "Test2",
      position: "QB",
      touchdowns: 2,
      catches: 0,
      rushYds: 5,
      fumble: 1,
      interception: 0,
      tackle: 0,
      sacks: 0,
      dTouchdowns: 0,
      safety: 0,
      xPt: 0,
      fGoalLess: 0,
      fGoalMore: 0
    },
    {
      player: "Test 3",
      position: "QB",
      touchdowns: 2,
      catches: 0,
      rushYds: 5,
      fumble: 1,
      interception: 0,
      tackle: 0,
      sacks: 0,
      dTouchdowns: 0,
      safety: 0,
      xPt: 0,
      fGoalLess: 0,
      fGoalMore: 0
    },
    {
      player: "New England Patriots",
      position: "Team",
      touchdowns: 4,
      catches: 13,
      rushYds: 300,
      fumble: 3,
      interception: 2,
      tackle: 6,
      sacks: 3,
      dTouchdowns: 0,
      safety: 0,
      xPt: 4,
      fGoalLess: 2,
      fGoalMore: 1
    }
  ]
  
  var tableHeaders = ["Player/Team", "Position", "Touchdowns", "Catches", "# of Rushing Yds", "Fumble", "Interception", "Tackle", "Sacks", "Defensive Touchdowns", "Safety", "Extra Point", "Field Goals (under40 yds)", "Field Goals (40+ yds)", "Total Points"]

  window.onload = function() {
    $('.leagueList').empty();
    createNavLinks();
  }

  function createNavLinks() {
    for (i=0; i<leagues.length; i++) {
      let newP = $('</p>');
      let newA = $('<a>').text(leagues[i].name);
      newA.addClass('leagueNavLink');
      newA.attr({
        id: i,
        href: "pp22.html",
        "data-name": leagues[i].name,
        "data-description": leagues[i].description,
        "data-teams": leagues[i].teams
      });
      newP.append(newA);
      $('.leagueList').append(newP);
    }
  }
  
  jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

  $(document).on("click", ".leagueNavLink", function(event) {
    event.preventDefault();
    let lName = $(this).attr("data-name");
    let desc = $(this).attr("data-description");
    $('#leagueNameModal').attr("data-name", lName).text(lName);
    $('#leagueNameTitle').text(lName);
    $('#leagueDescription').text(desc);
    $('#memberList').addClass('show');
    $('#joinNow').addClass('show');

    $('#statTable').empty();
    for (i=0; i<leagues.length; i++) {
      if (leagues[i].name === lName) {
        for (t=0; t<leagues[i].teams.length; t++) {
          let newTable = $('<table>').addClass('table table-hover').attr("id", "team"+leagues[i].teams[t]);
          let newDiv = $('<div>').text(leagues[i].teams[t]);

          let newHeader = $('<thead>');
          let newHeadRow = $('<tr>');
          for (h=0; h<tableHeaders.length; h++) {
            let newTitle = $('<th>').html(tableHeaders[h]);
            newHeadRow.append(newTitle);
          }

          let newBody = $('<tbody>').attr("id", leagues[i].teams[t]+"stats");
          for (d=0; d<testData.length; d++) {

            let newBodyRow = $('<tr>');
            let newPlay = $('<td>').text(testData[d].player);
            let newPos = $('<td>').text(testData[d].position);
            let newTD = $('<td>').text(testData[d].touchdowns);
            let newCatch = $('<td>').text(testData[d].catches);
            let newRush = $('<td>').text(testData[d].rushYds);
            let newFumble = $('<td>').text(testData[d].fumble);
            let newInter = $('<td>').text(testData[d].interception);
            let newTackle = $('<td>').text(testData[d].tackle);
            let newSack = $('<td>').text(testData[d].sacks);
            let newDTD = $('<td>').text(testData[d].dTouchdowns);
            let newSafety = $('<td>').text(testData[d].safety);
            let newXPT = $('<td>').text(testData[d].xPt);
            let newFGLess = $('<td>').text(testData[d].fGoalLess);
            let newFGMore = $('<td>').text(testData[d].fGoalMore);
            let newTotal = $('<td>').text(129);

            newBodyRow.append(newPlay, newPos, newTD, newCatch, newRush, newFumble, newInter, newTackle, newSack, newDTD, newSafety, newXPT, newFGLess, newFGMore, newTotal);
            newBody.append(newBodyRow);
          }
          newHeader.append(newHeadRow);
          newTable.append(newHeader, newBody);
          $('#statTable').append(newDiv, newTable, $('<br>'));
          console.log(leagues[i].teams);
        }
      }
    }
  });

  $('#joinNow').on("click", function () {
   
  });

  function CreateTeam(league, qb, wr, te, k, rb) {
    this.league = league;
    this.qb = qb;
    this.wr = wr;
    this.te = te;
    this.k = k;
    this.rb = rb;
  }