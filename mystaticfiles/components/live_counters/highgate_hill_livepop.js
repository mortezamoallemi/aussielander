function highgate_hill_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6328;
var increase = Math.round(passed*5.27452039639585e-13*population);
document.getElementById("highgate_hill_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(highgate_hill_livepop, 500);
}
