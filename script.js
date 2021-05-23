//varibales

var mutltichoices = [

    {
        questions: "Which of the following function of Array object represents the source code of an object?",
        mutltichoices: ["toSource()", "splice()", "toString()", "unshift()"],
        responses: "toSource()"

    },

    {
        questions: "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
        mutltichoices: ["indexOf()", "join()", "lastIndexOf()", "map()"],
        Responses: "indexOf()"
    },

    {
        questions: "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
        mutltichoices: ["sup()", "small()", "strike()", "sub()"],
        responses: "sub()"
    },

    {

        questions: "Which built-in method sorts the elements of an array?",
        options: ["changeOrder(order)", "order()", "sort()", "None of the above"],
        responses: "sort()"
    },
    {
        questions: "Which of the following is not considered a JavaScript operator?",
        options: ["new", "this", "delete", "typeof"],
        responses: "this"
    },

    {
        questions: "Using _______ statement is how you test for a specific condition.",
        options: ["Select", "If", "Switch", "For"],
        responses: "if"
    },

];

/////////state variab

var score = 0;
var questionIndex = 0;


var currentTimeframe = document.querySelector("#currentTimeframe");
var clock = document.querySelector("#press here");
var questionsDiv = document.querySelector("#questionsDiv");
var pageCover = document.querySelector("#pageCover");


var secondsLeft = 60;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.querySelector("ul");

//clock

clock.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTimeframe.textContent = "Time:" + secondsLeft;

            if (secondsleft <= 0) {
                clearInterval(holdInterval);
                alldone();
                currentTimeframe.textContent = "Time has ended";
            }
        }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex) {
    questionsDiv.innerHTML = " ";
    ulCreate.innerHTML = " ";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }


    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulcreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })

}

function compare(event) {
    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        if (element.textContent == questions[questionsIndex].answer) {
            score++;
            createDiv.textcontent = "Well done. this is the answer: " + questions[questionsIndex].answer;

        }
        else {
            secondLeft = secondLeft - penalty;
            createDiv.textcontent = "Fail. the answer is : " + questions[questionsIndex].answer;
        }
    }


    questionIndex++;

    if (questionIndex >= questions.length) {
        Alldone();
        createDiv.textContent = "the quiz has ended" + " " + " You got " + "/" + questions.length + "right";
    }
    else {
        render(questionIndex);
    }
    questionDiv.appendChild(createDiv);
}


function alldone() {
    questionsDiv.innerHTML = " ";
    currentTime.innerHTML = " ";

    var createH1 = document.createElement("h1");
    createH1.setAttribute("id", "createH1");
    createH1.setAttribute("well fone");


    questionsDiv.appendChild(createH1);

    var createH1 = document.createElement("p");
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
            var finalscore = {
                name: name,
                score: timeRemaining

            }
            console.log(finalscore);
            var allscores = localStorage.getItem("all scores");
            if (allScores === null) {
                allScores = [];
            }
            else {
                allScores = JSON.parse(allScore);
            }
            allScore.push(finalscore);
            var newScore = JSON.stringify(allScore);
            localStorage.setItem("allScore", newScore);
            window.location.replace("./score.html");

        }
    });
}    





