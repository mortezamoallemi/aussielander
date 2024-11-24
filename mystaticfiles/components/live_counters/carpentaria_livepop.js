function carpentaria_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4828;
var increase = Math.round(passed*-2.63723519526496e-13*population);
document.getElementById("carpentaria_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(carpentaria_livepop, 500);
}
