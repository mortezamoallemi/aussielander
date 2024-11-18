function st_johns_park_wakeley_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10866;
var increase = Math.round(passed*1.36277267105092e-13*population);
document.getElementById("st_johns_park_wakeley_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_johns_park_wakeley_livepop, 500);
}
