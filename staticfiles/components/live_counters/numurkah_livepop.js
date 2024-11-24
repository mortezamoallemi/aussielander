function numurkah_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12265;
var increase = Math.round(passed*2.06864827627328e-15*population);
document.getElementById("numurkah_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(numurkah_livepop, 500);
}
