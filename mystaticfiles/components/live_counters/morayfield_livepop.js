function morayfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4826;
var increase = Math.round(passed*1.31548655271439e-14*population);
document.getElementById("morayfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(morayfield_livepop, 500);
}
