// Your code here
var questionArr = [
    {
        question: 'What famous painter is known for their vibrant self portraits?',
        answer: ' Frida Kahlo',
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


var startquiz = true;

var quiz = document.getElementById("quiz");

//When page loads - create "start quiz" button element within the div 'quiz'
function startQuiz(){
    var btn = document.createElement("button");
    button.innerHTML = "Start Quiz!";
    btn.id = "start-quiz";
    btn.type = "submit";
    document.quiz.appendChild(btn);
    
    btn.addEventListener("click", function(){

    })

}

//setInterval function()

//clearInterval function()