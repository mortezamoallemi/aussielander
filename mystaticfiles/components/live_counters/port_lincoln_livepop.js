function port_lincoln_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15686;
var increase = Math.round(passed*1.90429001428684e-13*population);
document.getElementById("port_lincoln_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_lincoln_livepop, 500);
}
