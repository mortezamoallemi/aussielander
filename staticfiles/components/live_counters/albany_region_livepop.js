function albany_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3439;
var increase = Math.round(passed*8.76690131168927e-13*population);
document.getElementById("albany_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(albany_region_livepop, 500);
}
