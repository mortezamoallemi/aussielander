function hyde_park_pimlico_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4650;
var increase = Math.round(passed*-2.78826964894096e-13*population);
document.getElementById("hyde_park_pimlico_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hyde_park_pimlico_livepop, 500);
}
