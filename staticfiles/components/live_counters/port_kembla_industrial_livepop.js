function port_kembla_industrial_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13;
var increase = Math.round(passed*-4.63525817188478e-12*population);
document.getElementById("port_kembla_industrial_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_kembla_industrial_livepop, 500);
}
