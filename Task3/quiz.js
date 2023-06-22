const data=[
    
        {
        question: "Which of the following command is used to create react-js-app ?",
        a: "npx create-react-app appname",
        b: "npm install create-react-app",
        c: "npx install create-react-app -g",
        d: "install - l create-react-app",
        correct: "a",
    },
    {
        question: "In React.js which one of the following is used to create a class for Inheritance ??",
        a: "Create",
        b: "extends",
        c: "Inherit",
        d: "Delete",
        correct: "b",
    },
    {
        question: "What is the default port number in which the application run ?",
        a: "3000",
        b: "8080",
        c: "4000",
        d: "None of the above",
        correct: "a",
    },
    {
        question: "Which of the following is a way to handle data in React.js ?",
        a: "States & props",
        b: "state & services ",
        c: "components & services",
        d: "states & components",
        correct: "a",
    },
    {
        question: "In React.js, how we can pass the data from one component to another in React.js ?",
        a: " setstates",
        b: "Render with arguments",
        c: "Props",
        d: "None of the above",
        correct: "c",
    }
];

const quiz=document.getElementById("quiz")
const ans=document.querySelectorAll(".answer")
const question=document.getElementById("question")
const atext=document.getElementById("atext")
const btext=document.getElementById("btext")
const ctext=document.getElementById("ctext")
const dtext=document.getElementById("dtext")

let currentq=0
let score=0
question
load_quiz()

function load_quiz(){
    deselect_answers()
    const currentData=data[currentq]
    question.innerHTML=`${currentq+1}. ${currentData.question}`
    atext.innerHTML=currentData.a
    btext.innerHTML=currentData.b
    ctext.innerHTML=currentData.c
    dtext.innerHTML=currentData.d 
}

function deselect_answers(){
    ans.forEach(ansEle => ansEle.checked=false)
}
function get_selected(){
    let answer
    ans.forEach(ansEle=>{
        if(ansEle.checked){
            answer=ansEle.id
        }
    })
    return answer
}

function next(){
    const answer=get_selected()
    if(answer){
        if(answer===data[currentq].correct)
            score++
    currentq++
    }
    else{
    window.alert("Please select an option!");
    }
    if(currentq<data.length)
        load_quiz()
    else
        quiz.innerHTML=`
        <h3>Your score: ${score}/${data.length}</h3>
        <h3>Percentage score: ${(score/data.length)*100}%</h3>
       
        <center><h3><b>Solutions</b></h3></center>
     <ul>
        <li><b>Question 1 Explanation: </b>
        The correct syntax for installing react app is npx create-react-app app name where app name is the name of the app you want to create.</li>
        <li><b>Question 2 Explanation: </b>
       The meaning of Extends in react.js is to create a class for the Inheritance So the correct answer is Extend.</li>

     <li><b>Question 3 Explanation: </b> 
    The default port number in which react application runs are 3000.</li>
    <li><b>Question 4 Explanation: </b> 
       State and Props are ways to handle data in React.js where the state is mutable and props are unchangeable.</li>
       <li><b>Question 5 Explanation: </b> 
     Props can help to pass the data from one component from another in react.js. Props are un-mutable so that they cant be changed.</li>
         </ul>
   
        <button onclick="location.reload()">Reload</button>
        `
}

