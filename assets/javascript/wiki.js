AOS.init();

$('#submit').on("click", function(event) {
    event.preventDefault();
    console.log($('#searchItem').val().trim());
    let searchItem = $('#searchItem').val().trim().replace(" ", "%20");

    let searchURL = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchItem;

    $.ajax({
        url: searchURL,
        method: "GET"
    })
    .then(function(response) {
        $('#results').empty();
        let results = response;
        let newDiv = $('<div>').html(results[1][0]);
        let newPara = $('<p>').html(results[2][0]);
        let newLink = $('<a>').attr("src", results[3][0]);
       setTimeout(function() {
        $('#results').append(newDiv, newPara, newLink, $('<br>'), $('<p>').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), $('<p>').text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."));
       }, 1500);
        console.log(results);
    });
});