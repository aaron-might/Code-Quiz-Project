var highscore= document.querySelector("#highscore");
var clear= document.querySelector("#clear");
var back=document.querySelector("#back");


clear.addEventListener("click",function(){
    localStorage.clear ();
    location.reload ();

});

var allscore= localStorage.getItem("allscore");
allscore = JSON.parse(allscore);


if (allscore !== null) {

    for (var k=0; k<allscore.length; k++) {
        var createLi= document.querySelector("#createLi");
        highscore.appendChild(createLi);

    }
}