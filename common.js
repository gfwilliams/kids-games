var result = "";

function randInt(a,b) {
  return a+Math.floor(Math.random()*(b-a));
}
function showResult(ok) {
  document.getElementById("maths").innerHTML = "";
  document.body.style["background-color"] = "white";
  document.getElementById("answergood").style.display = ok?"inline-block":"none";
  document.getElementById("answerbad").style.display = (!ok)?"inline-block":"none";
  setTimeout(newSum, 2000);
}
window.addEventListener("keypress", function(e) {
  if ("0123456789".includes(e.key)) {
    result += e.key;
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
    update();
    return false;
  }
});
