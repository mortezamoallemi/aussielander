function parrearra_warana_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9505;
var increase = Math.round(passed*2.76151461298758e-13*population);
document.getElementById("parrearra_warana_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parrearra_warana_livepop, 500);
}
