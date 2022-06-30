// Your code here
var questionArr = [
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


function gradeQuiz(){
    console.log(correctAnswers)
    var percentage = correctAnswers/questionArr.length
    console.log(percentage)
    quiz.innerHTML = ""
    quiz.innerHTML = percentage
}

//When page loads - create "start quiz" button element within the div 'quiz'
function startQuiz(){
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

startQuiz()


function showQuestion(){
    quiz.innerHTML = ""
    var question = questionArr[questionIndex]
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
                questionIndex++
                if(questionIndex === questionArr.length){
                    gradeQuiz()
                } else{showQuestion()}
        })
    }
        quiz.appendChild(div)
}
//setInterval function()

//clearInterval function()