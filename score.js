var highScore= document.querySelector("#highscore");
var clear= document.querySelector("#clear");
var back = document.querySelector("#back");


clear.addEventListener("click",function(){
    localStorage.clear ();
    location.reload ();

});

var allScores= localStorage.getItem("allScores");
allScores = JSON.parse(allScores);


if (allScores !== null) {

    for (var i=0; i<allScores.length; i++) {
        var createLi= document.createElement("li");
        createLi.textContent = allScores[i].name + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
   
}
// Event listener to move to index page
back.addEventListener("click", function () {
    window.location.replace("./index.html");
});