function parkes_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10983;
var increase = Math.round(passed*2.54581282886551e-14*population);
document.getElementById("parkes_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(parkes_livepop, 500);
}
