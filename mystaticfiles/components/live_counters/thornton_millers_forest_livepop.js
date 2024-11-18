function thornton_millers_forest_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10003;
var increase = Math.round(passed*8.67625568643208e-13*population);
document.getElementById("thornton_millers_forest_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(thornton_millers_forest_livepop, 500);
}
