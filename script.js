//varibales

var multichoices = [

    {
        questions: "Which of the following function of Array object represents the source code of an object?",
        possibility: ["toSource()", "splice()", "toString()", "unshift()"],
        responses: "toSource()"

    },

    {
        questions: "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
        possibility: ["indexOf()", "join()", "lastIndexOf()", "map()"],
        responses: "indexOf()"
    },

    {
        questions: "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
        possibility: ["sup()", "small()", "strike()", "sub()"],
        responses: "sub()"
    },

    {
        questions: "Which built-in method sorts the elements of an array?",
        possibility: ["changeOrder(order)", "order()", "sort()", "None of the above"],
        responses: "sort()"
    },
    {
        questions: "Which of the following is not considered a JavaScript operator?",
        possibility: ["new", "this", "delete", "typeof"],
        responses: "this"
    },

    {
        questions: "Using _______ statement is how you test for a specific condition.",
        possibility: ["Select", "If", "Switch", "For"],
        responses: "if"
    },

];

/////////state variab

var score = 0;
var multichoicesIndex = 0;


var currentTimeframe = document.querySelector("#currentTimeframe");
var Chronometer = document.querySelector("#chronometer"); ("#press here");
var questionsDiv = document.querySelector("#questionsDiv");
var pageCover = document.querySelector("#pageCover");


var secondsLeft = 60;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

//clock

Chronometer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTimeframe.textContent = "Time:" + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                alldone();
                currentTimeframe.textContent = "Time has ended";
            }
        }, 1000);
    }
    render(multichoicesIndex);
});

function render(multichoicesIndex) {
    questionsDiv.innerHTML = " ";
    ulCreate.innerHTML = " ";

    for (var i = 0; i < multichoices.length; i++) {
        var usermultiChoices = multichoices[multichoicesIndex].questions;
        var userpossibility = multichoices[multichoicesIndex].possibility;
        questionsDiv.textContent = usermultiChoices;
    }


    userpossibility.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })

}

function compare(event) {

    var element = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == multichoices[multichoicesIndex].responses) {
            score++;
            createDiv.textcontent = "Well done. this is the answer: " + multichoices[multichoicesIndex].responses;

        }
        else {
            secondLeft = secondLeft - penalty;
            createDiv.textcontent = "Fail. the answer is : " + multichoices[multichoicesIndex].responses;
        }
    }


    multichoicesIndex++;

    if (multichoicesIndex >= multichoices.length) {
        Alldone();
        createDiv.textContent = "the quiz has ended" + " " + " You got " + "/" + multichoices.length + "right";
    }
    else {
        render(multichoicesIndex);
    }
    questionDiv.appendChild(createDiv);
}


function alldone() {
    questionsDiv.innerHTML = " ";
    currentTimeframe.innerHTML = " ";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.setAttribute("well fone");


    questionsDiv.appendChild(createH1);

    var createP = document.createElement("p");
    createImageBitmap.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    if (secondsleft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "this your total score: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }


    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textcontent = "put your name: ";

    questionsDiv.appendChild(createLabel);

    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "name");
    createInput.textContent = " ";

    questionsDiv.appendChild(createInput);

    var createSubmit = document.createElement("buttn");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    questionsDiv.appendChild(createSubmit);


    createSubmit.addEventListener("click", function () {
        var name = createInput.value;

        if (name === null) {
            console.log("No input value ");
        }
        else {
            var finalScore = {
                name: name,
                score: timeRemaining

            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            }
            else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScore);
            localStorage.setItem("allScores", newScore);
            window.location.replace("./score.html");

        }
    });
}





