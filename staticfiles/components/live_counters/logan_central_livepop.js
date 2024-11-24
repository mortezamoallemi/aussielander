function logan_central_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6136;
var increase = Math.round(passed*-1.2891019050773e-13*population);
document.getElementById("logan_central_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(logan_central_livepop, 500);
}
