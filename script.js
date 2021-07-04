let userName, userEvent, userTime;
let avatarSpeak = new SpeechSynthesisUtterance();
// DOM manipulation to show/hide forms
document.getElementById("avatarframe").style.display = "block";
document.getElementById("welcome").style.display = "block";
document.getElementById("timerForm").style.display = "none";
document.getElementById("timer").style.display = "none";

// speech functions

function avatarWelcome() {
  avatarSpeak.text = "Welcome to the Avatar Timer. Please enter your name?"; 
  window.speechSynthesis.speak(avatarSpeak);
};

function avatarHello() 
{
  avatarSpeak.text = "Hello !" + document.getElementById("name").value + "How long would you like a timer for?";
  window.speechSynthesis.speak(avatarSpeak);
};

function avatarError() 
{
  avatarSpeak.text = "Please enter your name.";
  window.speechSynthesis.speak(avatarSpeak);
}

function avatarTimer() 
{
  avatarSpeak.text = "Timer set for" + userTime + "minutes.";
  window.speechSynthesis.speak(avatarSpeak);
}

function avatarEnd1() 
{
  avatarSpeak.text = userName + " it is time to " + userEvent;
  window.speechSynthesis.speak(avatarSpeak);
}

function avatarEnd2() 
{
  avatarSpeak.text = userName + "your timer has ended.";
  window.speechSynthesis.speak(avatarSpeak);
}


// Welcome interactions
avatarWelcome();

document.getElementById("btnsubmit").addEventListener("click", function () {
  userName = document.getElementById("name").value;
  if (userName) {
  
  document.getElementById("welcome").style.display = "none";
    document.getElementById("timerForm").style.display = "block";
    document.getElementById("hello").innerHTML = "Hello " + userName + "! <br/><br/>How long would you like a timer for?";
    avatarHello();
}else{
  avatarError();
}
});

// Form interactions
document.getElementById("formbtn").addEventListener("click", function () {

  userEvent = document.getElementById("todo").value;
  userTime = document.getElementById("timerTime").value;
  document.getElementById("timerForm").style.display = "none";
  document.getElementById("timer").style.display = "block";
  avatarTimer();


  // Timer Interactions

  var user_time = parseInt(userTime);
  var setTimer = setInterval(function () {
    if (user_time != 0) {
      document.getElementById("ttltimer").innerHTML = user_time;
      
    } else {
      clearInterval(setTimer);
      if(userEvent){
        document.getElementById("ttltimer").innerHTML =
        userName + " it is time to " + userEvent + ".";
      avatarEnd1();
      }else{
        document.getElementById("ttltimer").innerHTML =
        userName + " your timer has ended.";
      avatarEnd2();
      }
      
    }
    user_time -= 1;
  }, 5000);

});

  // if end button pressed
  document.getElementById("endbtn").addEventListener("click", function(){
    
    // clear input fields
    document.getElementById("name").value="";
    document.getElementById("timerTime").value = "0";
    document.getElementById("todo").value="";
    document.getElementById("ttltimer").innerHTML =""
    // return to welcome screen
    document.getElementById("timer").style.display="none"
    document.getElementById("welcome").style.display="block"
    avatarWelcome();
  })




