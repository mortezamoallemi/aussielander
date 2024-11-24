function triabunna_bicheno_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4371;
var increase = Math.round(passed*3.06161467924731e-13*population);
document.getElementById("triabunna_bicheno_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(triabunna_bicheno_livepop, 500);
}
