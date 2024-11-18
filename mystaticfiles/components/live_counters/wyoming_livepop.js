function wyoming_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11434;
var increase = Math.round(passed*1.37368214207226e-13*population);
document.getElementById("wyoming_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wyoming_livepop, 500);
}
