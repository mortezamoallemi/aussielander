function darling_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13743;
var increase = Math.round(passed*7.19002694380357e-13*population);
document.getElementById("darling_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(darling_heights_livepop, 500);
}
