function dawesville_bouvard_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7087;
var increase = Math.round(passed*1.55266753789659e-12*population);
document.getElementById("dawesville_bouvard_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dawesville_bouvard_livepop, 500);
}
