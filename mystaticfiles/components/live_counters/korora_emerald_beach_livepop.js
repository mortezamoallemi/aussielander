function korora_emerald_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8740;
var increase = Math.round(passed*8.06757206392939e-13*population);
document.getElementById("korora_emerald_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(korora_emerald_beach_livepop, 500);
}
