function newport_bilgola_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13186;
var increase = Math.round(passed*1.40052004711583e-13*population);
document.getElementById("newport_bilgola_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newport_bilgola_livepop, 500);
}
