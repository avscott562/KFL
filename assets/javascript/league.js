  
  var leagues = [
    {
      name: "Football Heroes",
      description: "Recommended for ages 6-8",
      teams: [
        {teamName: "Football Geek",}, 
        {teamName: "Pig Skin Rules",},
        {teamName: "Steelers Fan",}
      ],
      usedQB: [],
      usedWR: [],
      usedTE: [],
      usedRB: [],
      usedK: []
    },
    {
      name: "Football Legends",
      description: "Recommended for ages 8-10",
      teams: [{teamName: "Dallas Reigns",}, {teamName:"Raider Nation",}, {teamName: "Pro Bowler",}],
      usedQB: [],
      usedWR: [],
      usedTE: [],
      usedRB: [],
      usedK: []
    },
    {
      name: "The Real MVPs",
      description: "Recommended for ages 10-12",
      teams: [{teamName: "Pro Baller",}, {teamName: "Ben's Bad Boys",}, {teamName: "Larry's Legends",}],
      usedQB: [],
      usedWR: [],
      usedTE: [],
      usedRB: [],
      usedK: []
    },
    {
      name: "The Brady Bunch",
      description: "Recommended for ages 12-14",
      teams: [{teamName: "Rich's Radicals",}, {teamName: "Bean Town Ballers",}, {teamName: "Alex's Animals",}],
      usedQB: [],
      usedWR: [],
      usedTE: [],
      usedRB: [],
      usedK: []
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

function leagueTeamsPlayers (league) {
  for (t=0; t<league.teams.length; t++) {
    let qb = eligibleQB.pop(Math.floor(Math.random() * eligibleQB.length));
    league.teams[t].q = qb;
    // league.usedQB.push(qb);

    let rb = eligibleRB.pop(Math.floor(Math.random() * eligibleRB.length));
    league.teams[t].r = rb;

    let wr = eligibleWR.pop(Math.floor(Math.random() * eligibleWR.length));
    league.teams[t].w = wr;

    let te = eligibleTE.pop(Math.floor(Math.random() * eligibleTE.length));
    league.teams[t].t = te;

    let kr = eligibleK.pop(Math.floor(Math.random() * eligibleK.length));
    league.teams[t].k = kr;
  }
  console.log(league.teams);
  console.log(league.teams.length);
  console.log(league.teams[0].k.player);
}

leagueTeamsPlayers (leagues[0]);
  
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
          let newTable = $('<table>').addClass('table table-hover').attr("id", "team"+leagues[i].teams[t].teamName);
          let newDiv = $('<div>').text(leagues[i].teams[t].teamName);

          let newHeader = $('<thead>');
          let newHeadRow = $('<tr>');
          for (h=0; h<tableHeaders.length; h++) {
            let newTitle = $('<th>').html(tableHeaders[h]);
            newHeadRow.append(newTitle);
          }

          let newBody = $('<tbody>').attr("id", leagues[i].teams[t].teamName+"stats");
       

          console.log('we are here')
            for ( key in leagues[i].teams[t]){
              if ( key.toString() == "teamName"){
                continue
                // this skips this iteration of the loop
              }

              let newBodyRow = $('<tr>');
              let newPlay = $('<td>').text(leagues[i].teams[t][key].player);
              let newPos = $('<td>').text(leagues[i].teams[t][key].position);
              let newTD = $('<td>').text(leagues[i].teams[t][key].touchdowns);
              let newCatch = $('<td>').text(leagues[i].teams[t][key].catches);
              let newRush = $('<td>').text(leagues[i].teams[t][key].rushYds);
              let newFumble = $('<td>').text(leagues[i].teams[t][key].fumble);
              let newInter = $('<td>').text(leagues[i].teams[t][key].interception);
              let newTackle = $('<td>').text(leagues[i].teams[t][key].tackle);
              let newSack = $('<td>').text(leagues[i].teams[t][key].sacks);
              let newDTD = $('<td>').text(leagues[i].teams[t][key].dTouchdowns);
              let newSafety = $('<td>').text(leagues[i].teams[t][key].safety);
              let newXPT = $('<td>').text(leagues[i].teams[t][key].xPt);
              let newFGLess = $('<td>').text(leagues[i].teams[t][key].fGoalLess);
              let newFGMore = $('<td>').text(leagues[i].teams[t][key].fGoalMore);
              let newTotal = $('<td>').text(Math.floor(Math.random() * 50));
              
            newBodyRow.append(newPlay, newPos, newTD, newCatch, newRush, newFumble, newInter, newTackle, newSack, newDTD, newSafety, newXPT, newFGLess, newFGMore, newTotal);
            newBody.append(newBodyRow);
          
          }

          
          newHeader.append(newHeadRow);
          newTable.append(newHeader, newBody);
          $('#statTable').append(newDiv, newTable, $('<br>'));
          console.log(leagues[i].teams[t].teamName);
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