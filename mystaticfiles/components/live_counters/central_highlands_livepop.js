function central_highlands_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2056;
var increase = Math.round(passed*-3.42242643071091e-13*population);
document.getElementById("central_highlands_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(central_highlands_livepop, 500);
}
