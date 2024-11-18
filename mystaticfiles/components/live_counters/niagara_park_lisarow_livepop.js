function niagara_park_lisarow_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8027;
var increase = Math.round(passed*-1.97212622279631e-14*population);
document.getElementById("niagara_park_lisarow_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(niagara_park_lisarow_livepop, 500);
}
