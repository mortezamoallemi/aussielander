function morphettville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14660;
var increase = Math.round(passed*5.16682593877197e-13*population);
document.getElementById("morphettville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(morphettville_livepop, 500);
}
