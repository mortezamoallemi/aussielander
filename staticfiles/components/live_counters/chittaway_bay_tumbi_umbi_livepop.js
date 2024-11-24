function chittaway_bay_tumbi_umbi_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15353;
var increase = Math.round(passed*2.47894142442959e-15*population);
document.getElementById("chittaway_bay_tumbi_umbi_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(chittaway_bay_tumbi_umbi_livepop, 500);
}
