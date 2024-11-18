function donvale_park_orchards_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15941;
var increase = Math.round(passed*1.78328899902307e-13*population);
document.getElementById("donvale_park_orchards_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(donvale_park_orchards_livepop, 500);
}
