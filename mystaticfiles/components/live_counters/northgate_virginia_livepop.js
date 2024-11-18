function northgate_virginia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6591;
var increase = Math.round(passed*2.22272777746337e-13*population);
document.getElementById("northgate_virginia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(northgate_virginia_livepop, 500);
}
