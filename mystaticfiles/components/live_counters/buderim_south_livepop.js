function buderim_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16322;
var increase = Math.round(passed*8.13964470837711e-13*population);
document.getElementById("buderim_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(buderim_south_livepop, 500);
}
