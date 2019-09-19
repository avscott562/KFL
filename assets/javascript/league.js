
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
      console.log(leagues[i].name);
    }
  }

  $(document).on("click", ".leagueNavLink", function(event) {
    event.preventDefault();
    let lName = $(this).attr("data-name");
    let desc = $(this).attr("data-description");
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