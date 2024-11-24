function port_macquarie_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5293;
var increase = Math.round(passed*3.15658781670153e-13*population);
document.getElementById("port_macquarie_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_macquarie_region_livepop, 500);
}
