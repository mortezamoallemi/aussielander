function toowoomba_west_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13004;
var increase = Math.round(passed*8.34878532732174e-13*population);
document.getElementById("toowoomba_west_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toowoomba_west_livepop, 500);
}
