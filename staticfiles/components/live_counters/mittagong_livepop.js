function mittagong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8999;
var increase = Math.round(passed*6.64356247497649e-13*population);
document.getElementById("mittagong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mittagong_livepop, 500);
}
