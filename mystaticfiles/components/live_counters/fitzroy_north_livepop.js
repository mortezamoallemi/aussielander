function fitzroy_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12338;
var increase = Math.round(passed*4.61533783169599e-13*population);
document.getElementById("fitzroy_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(fitzroy_north_livepop, 500);
}
