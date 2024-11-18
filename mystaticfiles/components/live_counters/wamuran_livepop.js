function wamuran_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3928;
var increase = Math.round(passed*5.83015932073837e-13*population);
document.getElementById("wamuran_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wamuran_livepop, 500);
}
