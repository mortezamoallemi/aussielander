function narrabeen_collaroy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 24771;
var increase = Math.round(passed*5.56502507050043e-13*population);
document.getElementById("narrabeen_collaroy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narrabeen_collaroy_livepop, 500);
}
