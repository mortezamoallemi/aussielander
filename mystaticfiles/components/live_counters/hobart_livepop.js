function hobart_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 204009;
var increase = Math.round(passed*1.10063745022237e-13*population);
document.getElementById("hobart_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hobart_livepop, 500);
}
