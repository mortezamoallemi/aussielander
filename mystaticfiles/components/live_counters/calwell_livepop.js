function calwell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5761;
var increase = Math.round(passed*-7.76821661346459e-14*population);
document.getElementById("calwell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(calwell_livepop, 500);
}
