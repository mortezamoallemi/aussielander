function millmerran_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3309;
var increase = Math.round(passed*3.79090741719147e-13*population);
document.getElementById("millmerran_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(millmerran_livepop, 500);
}
