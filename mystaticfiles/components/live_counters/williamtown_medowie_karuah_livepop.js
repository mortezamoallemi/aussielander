function williamtown_medowie_karuah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13673;
var increase = Math.round(passed*5.28883361683215e-13*population);
document.getElementById("williamtown_medowie_karuah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(williamtown_medowie_karuah_livepop, 500);
}
