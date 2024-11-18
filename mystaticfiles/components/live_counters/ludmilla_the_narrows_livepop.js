function ludmilla_the_narrows_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2543;
var increase = Math.round(passed*-7.53898799203555e-13*population);
document.getElementById("ludmilla_the_narrows_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ludmilla_the_narrows_livepop, 500);
}
