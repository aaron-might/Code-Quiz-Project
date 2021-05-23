var highScore= document.querySelector("#highscore");
var clear= document.querySelector("#clear");
var back=document.querySelector("#back");


clear.addEventListener("click",function(){
    localStorage.clear ();
    location.reload ();

});

var allScore= localStorage.getItem("allscore");
allscore = JSON.parse(allscore);


if (allScore !== null) {

    for (var i=0; i<allscore.length; i++) {
        var createLi= document.querySelector("#createLi");
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
Back.addEventListener("click", function () {
    window.location.replace("index.html");
});