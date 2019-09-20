AOS.init();

//giph api key
var giphKey = "GYHcoSDnNTboO0ZRaXgPLt7ixB2VEDWn"

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
        
        $('#results').append($('<br>'), searchImage);
    });

});