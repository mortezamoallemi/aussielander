function cunderdin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4102;
var increase = Math.round(passed*2.71659270478305e-13*population);
document.getElementById("cunderdin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cunderdin_livepop, 500);
}
