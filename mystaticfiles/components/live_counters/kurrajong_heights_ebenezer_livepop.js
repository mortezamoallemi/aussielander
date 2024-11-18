function kurrajong_heights_ebenezer_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21898;
var increase = Math.round(passed*1.34345605831043e-13*population);
document.getElementById("kurrajong_heights_ebenezer_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kurrajong_heights_ebenezer_livepop, 500);
}
