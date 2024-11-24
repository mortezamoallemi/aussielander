function summerhill_prospect_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4682;
var increase = Math.round(passed*1.10677942005248e-13*population);
document.getElementById("summerhill_prospect_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(summerhill_prospect_livepop, 500);
}
