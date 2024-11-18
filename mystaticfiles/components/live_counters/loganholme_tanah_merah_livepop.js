function loganholme_tanah_merah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11129;
var increase = Math.round(passed*2.3273191281019e-13*population);
document.getElementById("loganholme_tanah_merah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(loganholme_tanah_merah_livepop, 500);
}
