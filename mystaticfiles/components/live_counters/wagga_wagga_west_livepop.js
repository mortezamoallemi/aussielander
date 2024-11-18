function wagga_wagga_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12155;
var increase = Math.round(passed*2.02510360680029e-13*population);
document.getElementById("wagga_wagga_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wagga_wagga_west_livepop, 500);
}
