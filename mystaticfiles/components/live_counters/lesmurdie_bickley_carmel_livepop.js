function lesmurdie_bickley_carmel_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11591;
var increase = Math.round(passed*1.48356669043033e-13*population);
document.getElementById("lesmurdie_bickley_carmel_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lesmurdie_bickley_carmel_livepop, 500);
}
