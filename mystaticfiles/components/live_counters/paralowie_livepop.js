function paralowie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16745;
var increase = Math.round(passed*2.68445924119021e-13*population);
document.getElementById("paralowie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(paralowie_livepop, 500);
}
