function geraldton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 37429;
var increase = Math.round(passed*2.91244979078435e-13*population);
document.getElementById("geraldton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(geraldton_livepop, 500);
}
