function windsor_gardens_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20289;
var increase = Math.round(passed*5.56683611065477e-13*population);
document.getElementById("windsor_gardens_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(windsor_gardens_livepop, 500);
}
