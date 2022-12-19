var questions = [
  {
      numb: 1,
      question: "Which is the word processing software?",
      answer: "MS word 2007",
      options: [
        "Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"
      ],
  },
  {
      numb: 2,
      question: "MS Word is ____ software.?",
      answer:  "Word processing",
      options: [
        "Web browser",
        "Word processing",
        "Operating system",
        "Antivirus",
      ],
    },
         
  
  {
      numb: 3,
      question: "What does PHP stand for?",
      answer: "Hypertext Preprocessor",
      options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor",
      ],
  },
  {
      numb: 4,
      question: "What does SQL stand for?",
      answer: "Structured Query Language",
      options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language",
      ],
  },
  {
      numb: 5,
      question: "What does XML stand for?",
      answer: "eXtensible Markup Language",
      options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language",
      ],
  },
  {
    numb: 6,
      question: "A word gets selected by clicking it?",
      answer: "Twice",
      options: [
        " Once",
         "Twice",
          "Three times",
           "Four times",
      ],
  },
  {
    numb:7,
    question: "The center the selected text, the shortcut key is?",
      answer: "Ctrl + E",
      options: [
        "Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"
      ]
  },
  {
    numb:8,
    
    question: "Which option is not available in Microsoft office button?",
      answer: "old",
      options: [
        "Bold", "New", "Save", "Open"
      ]
  },
  {
    numb:9,
     
    question: " _____  is the change the way text warps around the selected object.?",
    
      answer:"Text wrapping" ,
      options: [
        "Text wrapping", "Indent", "Clipart", " Line spacing"
      ]
  },
  {
    numb:10,
    question:" _____  is the change the way text warps around the selected object.?",
    
    answer:"Both b and c",
    options: [
      "To save the document",
        "To set paper setting",
        "To see print preview of the document",
        "Both b and c",
    ],
    
   
  },
];

var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent");
var showMarks =document.getElementById("showMarks")
var showPercentage= document.getElementById("showPercentage")
var indexNum = 0;
var marks = 0;
var main = document.getElementById('main')


function showQuestion() {
  question.innerHTML = questions[indexNum].question;
  questionNum.innerHTML =
      "Question # " + (indexNum + 1) + "/" + questions.length;
  ansParent.innerHTML = "";
  for (var i = 0; i < questions[indexNum].options.length; i++) {
      ansParent.innerHTML += `<div class="col-md-6 py-2">
    <button onclick="checkAns('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-primary px-5 rounded-pill w-50">
    ${questions[indexNum].options[i]}
    </button>
</div>`;
  }
}
showQuestion();

function nextQuestion() {
  indexNum++;
  showQuestion();
}

function checkQues(a, b) {
  if (a == b) {
      marks++;
      showMarks.innerhtml = marks;
      showPercentage.innerHtml =marks/question.length* 100;
  }
  if(indexNum + 1 == questions.length){
      displayQuestion.style.display="none"
  }
  nextQuestion();
}