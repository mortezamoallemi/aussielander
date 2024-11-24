function wallsend_elermore_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19628;
var increase = Math.round(passed*1.93557435302787e-13*population);
document.getElementById("wallsend_elermore_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wallsend_elermore_vale_livepop, 500);
}
