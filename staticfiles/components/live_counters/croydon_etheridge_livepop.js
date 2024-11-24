function croydon_etheridge_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1090;
var increase = Math.round(passed*-6.57127570976683e-13*population);
document.getElementById("croydon_etheridge_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(croydon_etheridge_livepop, 500);
}
