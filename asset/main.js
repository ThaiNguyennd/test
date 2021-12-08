// let talkAnswer = document.getElementById("talkAnswer");
// let eatAnsswer = document.getElementById("eatAnswer");
// let feelAnswer = document.getElementById("fellAnswer");
// // let btnDetermine = document.getElementsByClassName("btnDetermine");
// let imgcontainer = document.getElementById("imgcontainer");

// // btnDetermine.addEventListener("click", hamgido);

// function hamgido(){
//     if(talkAnswer.value=="1a" && eatAnsswer.value == "2c" && feelAnswer.value=="3a" ){
//         // let title = document.getElementsByClassName("title");
//         // title.textContent=="You are an alien";
//         // imgcontainer.setAttribute= ('src','asset/img/alien.jpg')
//         document.getElementsById("title").innerHTML="you're an alien";
//         imgcontainer.src = "./img/alien.jpg";

//     }
// }
function hamgido() {
    var a = document.getElementById("talkAnswer");
    var b = document.getElementById("eatAnswer");
    var c = document.getElementById("fellAnswer");
  
    if (a.value == "1a" && b.value == "2c" && c.value == "3a") {
      document.getElementById("title").innerHTML = "You're an alien";
      document.getElementById("imgcontainer").src = "./img/alien.jpg";
    } else if (a.value == "1b" && b.value == "2a" && c.value == "3a") {
      document.getElementById("title").innerHTML = "You're an Bizarre";
      document.getElementById("imgcontainer").src = "./img/bizarre.jpg";
    } else {
      document.getElementById("title").innerHTML = "You're an Human";
      document.getElementById("imgcontainer").src = "./img/normal.jpg";
    }
  }