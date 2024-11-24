function karana_downs_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6092;
var increase = Math.round(passed*1.47445062798862e-13*population);
document.getElementById("karana_downs_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(karana_downs_livepop, 500);
}
