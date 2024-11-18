function manjimup_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5539;
var increase = Math.round(passed*1.43588905365379e-13*population);
document.getElementById("manjimup_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(manjimup_livepop, 500);
}
