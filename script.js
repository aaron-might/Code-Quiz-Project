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
        mutltichoices: ["sup()","small()", "strike()", "sub()"],
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
        questions:"Using _______ statement is how you test for a specific condition.",
        options: ["Select", "If", "Switch", "For"],
        responses: "if"
},

];

/////////state variab

var score = 0;
var questionIndex = 0;


var currentTimeframe = document.querySelector("#currentTimeframe");
var clock = document.querySelector("#press here")
var questionsDiv = document.querySelector("#questionsDiv");
var pagecover = document.querySelector("#pagecover");


var secondsleft = 60;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.querySelector("ul");


//clock.addEventListener("click", function () {

  //  if (holdInterval === 0) {

   // }
//})