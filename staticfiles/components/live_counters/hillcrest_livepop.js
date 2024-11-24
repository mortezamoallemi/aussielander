function hillcrest_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8153;
var increase = Math.round(passed*3.19857198708198e-13*population);
document.getElementById("hillcrest_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hillcrest_livepop, 500);
}
