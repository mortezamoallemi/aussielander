function zillmere_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8968;
var increase = Math.round(passed*6.41689057472219e-13*population);
document.getElementById("zillmere_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(zillmere_livepop, 500);
}
