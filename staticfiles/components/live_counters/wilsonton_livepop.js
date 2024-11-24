function wilsonton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13312;
var increase = Math.round(passed*1.90048123418877e-13*population);
document.getElementById("wilsonton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wilsonton_livepop, 500);
}
