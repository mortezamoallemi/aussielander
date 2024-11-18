function nagambie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4006;
var increase = Math.round(passed*7.50340123766938e-13*population);
document.getElementById("nagambie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nagambie_livepop, 500);
}
