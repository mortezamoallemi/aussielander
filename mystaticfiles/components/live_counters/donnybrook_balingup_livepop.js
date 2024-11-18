function donnybrook_balingup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5871;
var increase = Math.round(passed*6.22626867875135e-13*population);
document.getElementById("donnybrook_balingup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(donnybrook_balingup_livepop, 500);
}
