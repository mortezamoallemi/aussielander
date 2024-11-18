function wagga_wagga_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16585;
var increase = Math.round(passed*2.6351363552334e-13*population);
document.getElementById("wagga_wagga_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wagga_wagga_east_livepop, 500);
}
