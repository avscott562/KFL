AOS.init();

//giph api key
var giphKey = "GYHcoSDnNTboO0ZRaXgPLt7ixB2VEDWn";

let selected = ["Cardinals", "Cowboys", "Patriots", "Ben Roethlisberger", "Cam Newton", "Todd Gurley", "Saquon Barkley", "Kareem Hunt", "Aaron Rodgers", "Russell Wilson", "Tom Brady"];

createSelections();

function createSelections() {
    for (w=0; w<selected.length; w++) {
        let newBtn = $('<button>').addClass('search').attr("data-name", selected[w]).text(selected[w]);
        $('#athleteButtons').append(newBtn);
    };
}

$(document).on("click", ".search", function() {
    event.preventDefault();
    let clickSearch = $(this).attr("data-name");
    let wikiClickSearch = clickSearch.replace(" ", "%20");
    let giphyClickSearch = clickSearch.replace(" ", "+");

    let searchClickURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + wikiClickSearch;

    $.ajax({
        url: searchClickURL,
        method: "GET"
    })
    .then(function(response) {
        $('#results').empty();
        let results = response;
        let searchName = results[1][0];
        let newDiv = $('<div>').html(searchName);
        let newPara = $('<p>').html(results[2][0]);
        let newLink = $('<a>').attr('src', results[3][0]).text('Check out ' + searchName + '\'s Wiki page!');
       setTimeout(function() {
        $('#results').append(newDiv, newPara, newLink, $('<br>'), $('<p>').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), $('<p>').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
       }, 500);
        console.log(results);

    });

    let giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + giphyClickSearch + "&rating=g&api_key=" + giphKey + "&limit=10";

    $.ajax({
        url: giphyURL,
        method: "GET"
    })
    .then(function(giphResponse) {
        let images = giphResponse.data;
        console.log(images);

        let giph = images[Math.floor(Math.random() * images.length)].images.original.url;
        let searchImage = $('<img>').attr({
            'src': giph,
            'alt': clickSearch
        })
        
        $('#results').prepend($('<br>'), searchImage);
    });

    
    let ytURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + giphyClickSearch + "best+plays&type=video&videoEmbeddable=true&key=AIzaSyDPG4X2HgjyrkRuXgU4EermQI49CztbWsI"

    $.ajax({
        url: ytURL,
        method: "GET"
    })
    .then(function(ytResponse) {
        let videos = ytResponse;
        console.log(videos.items[0].id.videoId);

    //     var tag = document.createElement('script');

    //   tag.src = "https://www.youtube.com/iframe_api";
    //   var firstScriptTag = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: videos.items[0].id.videoId,
          playerVars: {'rel' :0}
        //   events: {
        //     'onReady': onPlayerReady,
        //     'onStateChange': onPlayerStateChange
        //   }
        });
      }
      onYouTubeIframeAPIReady();
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }
    });
});

$('#submit').on("click", function(event) {
    event.preventDefault();

    let searchTerm = $('#searchItem').val().trim()
    console.log(searchTerm);
    let searchItem = searchTerm.replace(" ", "%20");
    let giphSearch = searchTerm.replace(" ", "+");

    let searchURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchItem;

    $.ajax({
        url: searchURL,
        method: "GET"
    })
    .then(function(response) {
        $('#results').empty();
        let results = response;
        let searchName = results[1][0];
        let newDiv = $('<div>').html(searchName);
        let newPara = $('<p>').html(results[2][0]);
        let newLink = $('<a>').attr('src', results[3][0]).text('Check out ' + searchName + '\'s Wiki page!');
       setTimeout(function() {
        $('#results').append(newDiv, newPara, newLink, $('<br>'), $('<p>').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), $('<p>').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
       }, 500);
        console.log(results);

    });

    let giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + giphSearch + "&rating=g&api_key=" + giphKey + "&limit=10";

    $.ajax({
        url: giphyURL,
        method: "GET"
    })
    .then(function(giphResponse) {
        let images = giphResponse.data;
        console.log(images);

        let giph = images[Math.floor(Math.random() * images.length)].images.original.url;
        let searchImage = $('<img>').attr({
            'src': giph,
            'alt': searchTerm
        })
        
        $('#results').prepend($('<br>'), searchImage);
    });

});