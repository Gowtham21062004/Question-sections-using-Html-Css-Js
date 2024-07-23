// function button1(){
   
//     var txt=document.getElementById("text").value;
    
//     if(txt==""){
//         alert("Please enter a value");
//     }
//     else if(txt=="good" || tex){
//         document.getElementById("h2").innerHTML="Good Vibe";
//     }
   
// }
function decline(){
    alert("Question Declined");
}

let questions = [
   "how many  programming languages known",
   " you are an engineer",
   "Do you know about react","what is java in oops concept"
]

function accept(){
   let question = document.getElementById("text").value;
   question = question.toLowerCase();
   if(questions.includes(question)) window.alert("Your question accepted ");
   else window.alert("Your question is rejected ");
}