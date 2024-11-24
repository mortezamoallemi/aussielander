function claremont_wa_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8149;
var increase = Math.round(passed*4.48176370541515e-13*population);
document.getElementById("claremont_wa_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(claremont_wa_livepop, 500);
}
