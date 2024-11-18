function geelong_west_hamlyn_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19465;
var increase = Math.round(passed*1.96211561117739e-13*population);
document.getElementById("geelong_west_hamlyn_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(geelong_west_hamlyn_heights_livepop, 500);
}
