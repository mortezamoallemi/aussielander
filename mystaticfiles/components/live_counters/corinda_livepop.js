function corinda_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4865;
var increase = Math.round(passed*2.26925534050841e-13*population);
document.getElementById("corinda_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(corinda_livepop, 500);
}
