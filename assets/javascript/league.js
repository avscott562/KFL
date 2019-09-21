  
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

  let topRB = ["Todd Gurley", "Saquon Barkley", "Ezekiel Elliott", "Alvin Kamara", "Melvin Gordon", "Christian McCaffrey", "Le'Veon Bell", "David Johnson", "Joe Mixon", "Kareem Hunt"];

let topQB = ["Tom Brady", "Drew Brees", "Patrick Mahomes", "Aaron Rodgers", "Ben Roethlisberger", "Russell Wilson", "Philip Rivers", "Matt Ryan", "Andrew Luck", "Cam Newton"];

let topWR = ["DeAndre Hopkins", "Julio Jones", "Michael Thomas", "Mike Evans", "Odell Beckham Jr", "Antonio Brown", "Keenan Allen", "Tyreek Hill", "Davante Adams", "JuJu Smith-Schuster"];

let topTE = ["Travis Kelce", "Zach Ertz", "George Kittle", "Evan Engram", "O.J. Howard", "Jared Cook", "Hunter Henry", "Trey Burton", "Eric Ebron", "Delanie Walker"];

let topK = ["Justin Tucker", "Will Lutz", "Greg Zuerlein", "Harrison Butker", "Robbie Gould", "Stephen Gostkowski", "Aldrick Rosas", "Steven Hauschka", "Jason Myers", "Joey Slye"];

let defTeams = ["Arizona Cardinals", "Atlanta Falcons", "Baltimore Ravens", "Buffalo Bills", "Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys", "Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts", "Jacksonville Jaguars", "Kansas City Chiefs", "Los Angeles Chargers", "Los Angeles Rams", "Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints", "New York Gians", "New York Jets", "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers", "San Franciso 49ers", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans", "Washington Redskins"];

let eligibleQB = [];
let eligibleRB = [];
let eligibleWR = [];
let eligibleTE = [];
let eligibleK = [];
let eligibleTeam = [];


function qBack() {
  for (b=0; b<topQB.length; b++) {
    eligibleQB[b] = new PlayerStats(topQB[b], "QB");
  }
}

function rBack() {
  for (b=0; b<topRB.length; b++) {
    eligibleRB[b] = new PlayerStats(topRB[b], "RB");
  }
}

function wReceiver() {
  for (b=0; b<topWR.length; b++) {
    eligibleWR[b] = new PlayerStats(topWR[b], "WR");
  }
}

function tEnd () {
  for (b=0; b<topTE.length; b++) {
    eligibleTE[b] = new PlayerStats(topTE[b], "TE");
  }
}

function kPlay () {
  for (b=0; b<topK.length; b++) {
    eligibleK[b] = new PlayerStats(topK[b], "K");
  }
}

function dTeam() {
  for (b=0; b<defTeams.length; b++) {
    eligibleTeam[b] = new PlayerStats(defTeams[b]);
  }
}

qBack();
rBack();
wReceiver();
tEnd();
kPlay();
dTeam();

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
          for (d=0; d<eligibleQB.length; d++) {

            let newBodyRow = $('<tr>');
            let newPlay = $('<td>').text(eligibleQB[d].player);
            let newPos = $('<td>').text(eligibleQB[d].position);
            let newTD = $('<td>').text(eligibleQB[d].touchdowns);
            let newCatch = $('<td>').text(eligibleQB[d].catches);
            let newRush = $('<td>').text(eligibleQB[d].rushYds);
            let newFumble = $('<td>').text(eligibleQB[d].fumble);
            let newInter = $('<td>').text(eligibleQB[d].interception);
            let newTackle = $('<td>').text(eligibleQB[d].tackle);
            let newSack = $('<td>').text(eligibleQB[d].sacks);
            let newDTD = $('<td>').text(eligibleQB[d].dTouchdowns);
            let newSafety = $('<td>').text(eligibleQB[d].safety);
            let newXPT = $('<td>').text(eligibleQB[d].xPt);
            let newFGLess = $('<td>').text(eligibleQB[d].fGoalLess);
            let newFGMore = $('<td>').text(eligibleQB[d].fGoalMore);
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
    for (i=0; i<eligibleQB.length; i++) {
      let newOpt = $('<option>').addClass('choose').text(eligibleQB[i].player);
      $('#quarterbackModal').append(newOpt);
    }

    for (i=0; i<eligibleWR.length; i++) {
      let newOpt = $('<option>').addClass('choose').text(eligibleWR[i].player);
      $('#wideReceiverModal').append(newOpt);
    }

    for (i=0; i<eligibleRB.length; i++) {
      let newOpt = $('<option>').addClass('choose').text(eligibleRB[i].player);
      $('#runningBackModal').append(newOpt);
    }
    
    for (i=0; i<eligibleTE.length; i++) {
      let newOpt = $('<option>').addClass('choose').text(eligibleTE[i].player);
      $('#tightEndModal').append(newOpt);
    }

    for (i=0; i<eligibleK.length; i++) {
      let newOpt = $('<option>').addClass('choose').text(eligibleK[i].player);
      $('#kickerModal').append(newOpt);
    }

    for (i=0; i<eligibleTeam.length; i++) {
      let newOpt = $('<option>').addClass('choose').text(eligibleTeam[i].player);
      $('#defenseTeamModal').append(newOpt);
    }

  });

  function CreateTeam(league, qb, wr, te, k, rb) {
    this.league = league;
    this.qb = qb;
    this.wr = wr;
    this.te = te;
    this.k = k;
    this.rb = rb;
  }

  function PlayerStats(n, p) {
    this.player = n;
    this.position = p;
    this.touchdowns = Math.floor(Math.random() * 6);
    this.catches = Math.floor(Math.random() * 6);
    this.rushYds = Math.floor(Math.random() * 70);
    this.fumble = Math.floor(Math.random() * 4);
    this.interception = Math.floor(Math.random() * 4);
    this.tackle = Math.floor(Math.random() * 6);
    this.sacks = Math.floor(Math.random() * 6);
    this.dTouchdowns = Math.floor(Math.random() * 3);
    this.safety = Math.floor(Math.random() * 3);
    this.xPt = Math.floor(Math.random() * 6);
    this.fGoalLess = Math.floor(Math.random() * 3);
    this.fGoalMore = Math.floor(Math.random() * 3);

  }

  function DefTeamStats(n) {
    this.player = n;
    this.position = "Defensive Team";
    this.touchdowns = Math.floor(Math.random() * 6);
    this.catches = Math.floor(Math.random() * 18);
    this.rushYds = Math.floor(Math.random() * 200);
    this.fumble = Math.floor(Math.random() * 7);
    this.interception = Math.floor(Math.random() * 7);
    this.tackle = Math.floor(Math.random() * 10);
    this.sacks = Math.floor(Math.random() * 6);
    this.dTouchdowns = Math.floor(Math.random() * 5);
    this.safety = Math.floor(Math.random() * 3);
    this.xPt = Math.floor(Math.random() * 6);
    this.fGoalLess = Math.floor(Math.random() * 3);
    this.fGoalMore = Math.floor(Math.random() * 3);

  }