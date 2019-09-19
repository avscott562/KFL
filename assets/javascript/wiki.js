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
        let results = response;
        let newDiv = $('<div>').html(results[1][0]);
        let newPara = $('<p>').html(results[2][0]);
        let newLink = $('<a>').attr("src", results[3][0]);
        $('#results').append(newDiv, newPara, newLink);
        console.log(results);
    });
});