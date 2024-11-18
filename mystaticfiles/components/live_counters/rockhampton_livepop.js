function rockhampton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 76990;
var increase = Math.round(passed*2.78691979597329e-13*population);
document.getElementById("rockhampton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockhampton_livepop, 500);
}
