function sale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14646;
var increase = Math.round(passed*1.69831141164992e-13*population);
document.getElementById("sale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sale_livepop, 500);
}
