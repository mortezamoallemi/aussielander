function blacktown_east_kings_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16920;
var increase = Math.round(passed*5.379353253611e-13*population);
document.getElementById("blacktown_east_kings_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(blacktown_east_kings_park_livepop, 500);
}
