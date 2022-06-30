// Your code here
var questionsArr = [
    {
        question: 'What famous painter is known for their vibrant self portraits?',
        answer: 'Frida Kahlo',
        options: [
            'Pablo Picasso',
            'Salvador Dali',
            'Frida Kahlo',
            'Andy Warhol',
        ]
    },
    {
        question: 'Who sang Happy Birthday Mr.President to John F. Kennedy in 1962?',
        answer: 'Marilyn Monroe',
        options: [
            'Audrey Hepburn',
            'Marilyn Monroe',
            'Judy Garland',
            'Jackie kennedy',
        ]
    },
    {
        question: 'What two siblings are famous for their games on Nintendo',
        answer: 'Mario and Luigi',
        options: [
            'Dexter and DeeDee',
            'Mario and Luigi',
            'Tommy and Chuckie',
            'Cat and dog',
        ]
    },
    {
        question: 'What famous bear is known for Wild Fire Prevention?',
        answer: 'Smokey the Bear',
        options: [
            'Pooh Bear',
            'Barenstein Bear',
            'Smokey the Bear',
            'Paddington Bear',
        ]
    },
    {
        question: 'what 80s inspired show involves the Upside Down?',
        answer: 'Stranger Things',
        options: [
            'Freaks and Geeks',
            'Stranger Things',
            'American Horror Story',
            'Glow',
        ]
    },
]


//var startquiz = true;

var quiz = document.getElementById("quiz");
var questionIndex = 0;
var correctAnswers = 0;
var intervalId

function gradeQuiz(){
    console.log(correctAnswers)
    var percentage = correctAnswers/questionsArr.length
    console.log(percentage)
    quiz.innerHTML = ""
    quiz.innerHTML = "Current Score " + percentage * 100 + "%"
    localStorage.setItem("previous-score", percentage)
    questionIndex = 0
    correctAnswers = 0
    createStartbtn()
}

function createStartbtn() {
    var btn = document.createElement("button");
    btn.innerHTML = "Start Quiz!";
    btn.id = "start-quiz";
    btn.type = "submit";
    quiz.appendChild(btn);
    
    btn.addEventListener("click", function(e){
        //console.log('clicked')
        showQuestion()

    })
}
//When page loads - create "start quiz" button element within the div 'quiz'
function startQuiz(){
    var score = localStorage.getItem("previous-score")
    if(score){
    var p = document.createElement("p")
    p.innerHTML = "Previous Score " + score * 100 +"%"
    quiz.appendChild(p)
    }
    //console.log(score)
   createStartbtn()
}

startQuiz()


function showQuestion(){
    quiz.innerHTML = ""
    var question = questionsArr[questionIndex]
    //console.log(question)
    var p = document.createElement("p");
    p.innerHTML = question.question
    quiz.appendChild(p);

    var div = document.createElement("div");
    for (let index = 0; index < question.options.length; index++) {
        const element = question.options[index];
        //console.log(element)
        var btn = document.createElement("button")
        btn.innerHTML = element
        div.appendChild(btn)
        btn.addEventListener("click", function(e){
            const selection = (e.target.innerHTML)
            if( selection === question.answer){
                correctAnswers++
            } 
                endTimer()
        })
    }
        quiz.appendChild(div)
        var ps = document.createElement("p")
        ps.textContent = 30
        ps.id = "timer"
        quiz.appendChild(ps)
        startTimer()
}

function startTimer(){
    intervalId = setInterval(function(){
        var ps = document.getElementById("timer");
        var seconds = Number(ps.textContent) -1
        ps.textContent = seconds
        if(seconds === -1) {
            endTimer()
        } else {}
        //console.log(p)   
    }, 1000)
}

function endTimer() {
    clearInterval(intervalId)
    questionIndex++
    if(questionIndex === questionsArr.length){
        gradeQuiz()
    } else{showQuestion()}
}


//setInterval function()
/*var timerId = setTimeout(function() {
    console.log('here')
}
//clearInterval function(*/