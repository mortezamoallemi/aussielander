function cobbitty_leppington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17890;
var increase = Math.round(passed*6.50828660905319e-12*population);
document.getElementById("cobbitty_leppington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cobbitty_leppington_livepop, 500);
}
