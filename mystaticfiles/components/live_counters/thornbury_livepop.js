function thornbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18464;
var increase = Math.round(passed*3.64032012533643e-13*population);
document.getElementById("thornbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(thornbury_livepop, 500);
}
