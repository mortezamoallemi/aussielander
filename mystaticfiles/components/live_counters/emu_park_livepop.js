function emu_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5462;
var increase = Math.round(passed*1.16975887473457e-12*population);
document.getElementById("emu_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(emu_park_livepop, 500);
}
