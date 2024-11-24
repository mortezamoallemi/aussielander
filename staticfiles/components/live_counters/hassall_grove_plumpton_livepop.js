function hassall_grove_plumpton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20673;
var increase = Math.round(passed*3.4060871000326e-13*population);
document.getElementById("hassall_grove_plumpton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hassall_grove_plumpton_livepop, 500);
}
