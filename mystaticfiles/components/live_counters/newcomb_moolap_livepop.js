function newcomb_moolap_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14595;
var increase = Math.round(passed*-4.97750526843483e-14*population);
document.getElementById("newcomb_moolap_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(newcomb_moolap_livepop, 500);
}
