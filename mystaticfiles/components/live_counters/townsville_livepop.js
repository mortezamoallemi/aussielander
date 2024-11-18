function townsville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 173813;
var increase = Math.round(passed*4.3498851176562e-13*population);
document.getElementById("townsville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(townsville_livepop, 500);
}
