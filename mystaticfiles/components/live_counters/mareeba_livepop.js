function mareeba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11078;
var increase = Math.round(passed*5.35501785171572e-13*population);
document.getElementById("mareeba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mareeba_livepop, 500);
}
