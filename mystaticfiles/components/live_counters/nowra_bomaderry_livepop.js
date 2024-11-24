function nowra_bomaderry_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 35797;
var increase = Math.round(passed*4.5095264897262e-13*population);
document.getElementById("nowra_bomaderry_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nowra_bomaderry_livepop, 500);
}
