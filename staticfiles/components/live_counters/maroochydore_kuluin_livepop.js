function maroochydore_kuluin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19163;
var increase = Math.round(passed*8.72479813950081e-13*population);
document.getElementById("maroochydore_kuluin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maroochydore_kuluin_livepop, 500);
}
