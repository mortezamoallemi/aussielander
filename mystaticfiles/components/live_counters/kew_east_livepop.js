function kew_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6510;
var increase = Math.round(passed*2.01914606149218e-13*population);
document.getElementById("kew_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kew_east_livepop, 500);
}
