function traralgon_morwell_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 40598;
var increase = Math.round(passed*1.40896084067028e-13*population);
document.getElementById("traralgon_morwell_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(traralgon_morwell_livepop, 500);
}
