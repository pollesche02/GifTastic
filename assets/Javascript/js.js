// this this my array
var animations = ["Space Jam", "Quest for Camelot", "Looney Tunes",
 "The Lego Movie", "Tom and Jerry","Coyote vs. Acme", "The Flinstones",
 "Tiny Toons", "Animaniacs"];
//this is going to be the function to display my array
function renderButtons(){
    $("#buttons-view").empty();  // i have to do this or my buttons are going to repeat. 

    // now i have to loop through my animation array
    for (var i = 0; i < animations.length; i++) {

        // now i have to make a new button for each array only have to use ; $("<button>") is what i hav eto use to create
        //the tag ;  a = adding
        var a = $("<button>");
        a.addClass("animations-btn");
        //attritbute now
        a.attr("data-name", animations[i]);
        a.text(animations[i]);
        $("#buttons-view").append(a);
    }
}

// now i have to work something for each button being clicked
$("#add-animations").on("click",function(event) {
    event.preventDefault();

    var animations = $("#animations-input").val().trim();
    animations.push(animation);
    renderButtons();
});


renderButtons();

function displayAnimation(){
    $(document).on('click', '.animations', function (){
    var animation = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=HApRmYNDPxOfcHyTb4yYNOPsQnULqSmW=" + animations + "limit=10&offset=0&land=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        var results = response.data;
        for (var i = 0; i < response.data.length; i++) {

            var animationDiv = $("<div class='animation'>");

            // i have to save the gif information... 
            var gif = response.data[i].images.fixed_height_still.url;
            var pOne =$("<img>").attr("src", gif);  // how do i get the gif to show up?

            animationsDiv.append(pOne);

            var rating = response.data[i].rating;

            var ptwo =$("<p>").text("Rating: " + rating);

            emotionDiv.append(pTwo);

            $("#gifcontainer").prepent("animationsDiv");
        }
    });
});
}
