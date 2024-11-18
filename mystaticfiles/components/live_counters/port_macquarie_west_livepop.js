function port_macquarie_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17326;
var increase = Math.round(passed*9.10017870513559e-13*population);
document.getElementById("port_macquarie_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(port_macquarie_west_livepop, 500);
}
