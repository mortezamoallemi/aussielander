function morwell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13811;
var increase = Math.round(passed*-8.80113330582675e-14*population);
document.getElementById("morwell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(morwell_livepop, 500);
}
