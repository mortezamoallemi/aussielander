function port_macquarie_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 28050;
var increase = Math.round(passed*3.09967842005022e-13*population);
document.getElementById("port_macquarie_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_macquarie_east_livepop, 500);
}
