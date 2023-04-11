var result = "";
const utter_good = ["Well done!","That's great!","Perfect","Good job","Impressive!","Excellent","Fantastic"];
const utter_bad = ["Oh no", "That's not right!", "I'm afraid not","Sorry","Wrong!"];



function speak(x) {
  if (typeof SpeechSynthesisUtterance == "undefined") return;
  let utterance = new SpeechSynthesisUtterance(x);
  let voice = speechSynthesis.getVoices().find(v => v.name.toLowerCase().includes(" uk ") && v.name.toLowerCase().includes("female"));
  if (voice!=undefined)
    utterance.voice = voice;
  speechSynthesis.speak(utterance);
}
function randInt(a,b) {
  return a+Math.floor(Math.random()*(0.9999+b-a));
}
function showResult(ok, sum) {
  document.getElementById("maths").innerHTML = "";
  document.body.style["background-color"] = "white";
  document.getElementById("answergood").style.display = ok?"inline-block":"none";
  document.getElementById("answerbad").style.display = (!ok)?"inline-block":"none";
  setTimeout(newSum, 2000);
  if (ok) speak(sum+". "+utter_good[randInt(0,utter_good.length-1)]);
  else speak(utter_bad[randInt(0,utter_bad.length-1)]);
}


window.addEventListener("keypress", function(e) {
  if ("0123456789".includes(e.key)) {
    result += e.key;
    speak(result);
    update();
  }
});
window.addEventListener("keydown", function(event) {
  var key = event.keyCode || event.charCode;
  // console.log(key);
  if (result!="" && key==13) {
    checkResult();
    result = "";
  }
  if (key==8 || key==46) {
    result = result.slice(0,-1);
    speak(result);
    update();
    return false;
  }
});
