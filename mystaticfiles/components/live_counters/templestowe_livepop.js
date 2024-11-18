function templestowe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16620;
var increase = Math.round(passed*5.28786979078529e-14*population);
document.getElementById("templestowe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(templestowe_livepop, 500);
}
