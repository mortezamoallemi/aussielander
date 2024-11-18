function hackham_onkaparinga_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6313;
var increase = Math.round(passed*-1.0461404935424e-13*population);
document.getElementById("hackham_onkaparinga_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hackham_onkaparinga_hills_livepop, 500);
}
