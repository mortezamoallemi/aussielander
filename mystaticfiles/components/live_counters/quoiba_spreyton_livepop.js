function quoiba_spreyton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2908;
var increase = Math.round(passed*1.85890664892676e-13*population);
document.getElementById("quoiba_spreyton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(quoiba_spreyton_livepop, 500);
}
