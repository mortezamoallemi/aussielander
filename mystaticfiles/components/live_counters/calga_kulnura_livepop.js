function calga_kulnura_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4703;
var increase = Math.round(passed*3.90718674071895e-13*population);
document.getElementById("calga_kulnura_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(calga_kulnura_livepop, 500);
}
