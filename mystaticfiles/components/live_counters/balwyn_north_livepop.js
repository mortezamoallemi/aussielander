function balwyn_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20222;
var increase = Math.round(passed*8.81082959038731e-14*population);
document.getElementById("balwyn_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(balwyn_north_livepop, 500);
}
