function wagga_wagga_north_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4404;
var increase = Math.round(passed*1.47521234554857e-12*population);
document.getElementById("wagga_wagga_north_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wagga_wagga_north_livepop, 500);
}