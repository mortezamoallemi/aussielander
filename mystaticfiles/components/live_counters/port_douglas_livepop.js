function port_douglas_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5257;
var increase = Math.round(passed*6.12541120075795e-13*population);
document.getElementById("port_douglas_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_douglas_livepop, 500);
}
