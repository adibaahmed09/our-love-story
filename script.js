let currentQuestion = 0;


let questions = [

"Do you love me? 💖",

"Am I your favourite person? 🥰",

"Do you miss me when I am not around? 💕",

"Do you like our memories together? 📸",

"Do you want more beautiful moments with me? ✨",

"Do I make you happy? 😊",

"Will you always support me? ❤️",

"Do you enjoy my little surprises? 🎁",

"Do you want to stay together forever? 💞",

"Are you ready for your final surprise? 💌"

];




// PASSWORD

function checkPassword(){

let password =
document.getElementById("password").value;


if(password === "01012023"){


document.getElementById("passwordPage")
.classList.add("hidden");


document.getElementById("envelopePage")
.classList.remove("hidden");


}

else{


document.getElementById("message")
.innerHTML="💔 Wrong password";


}

}





// ENVELOPE

function openQuestions(){


document.getElementById("envelopePage")
.classList.add("hidden");


document.getElementById("questionPage")
.classList.remove("hidden");


showQuestion();


}




// QUESTIONS

function showQuestion(){


document.getElementById("question")
.innerHTML =
questions[currentQuestion];


}



function answerYes(){


document.getElementById("reaction")
.innerHTML=
"🥰 Hug for you 💖";


nextQuestion();


}



function answerNo(){


document.getElementById("reaction")
.innerHTML=
"🥺 Teddy is sad";


nextQuestion();


}




function nextQuestion(){


currentQuestion++;


if(currentQuestion < questions.length){


setTimeout(()=>{


showQuestion();


},800);


}

else{


setTimeout(()=>{


document.getElementById("questionPage")
.classList.add("hidden");


document.getElementById("letterPage")
.classList.remove("hidden");


},1000);


}


}





// MEMORIES

function showMemories(){


document.getElementById("letterPage")
.classList.add("hidden");


document.getElementById("memoryPage")
.classList.remove("hidden");


}





// GIFT

function showGift(){


document.getElementById("memoryPage")
.classList.add("hidden");


document.getElementById("giftPage")
.classList.remove("hidden");


}
