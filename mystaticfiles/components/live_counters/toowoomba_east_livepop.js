function toowoomba_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9754;
var increase = Math.round(passed*-1.90855925884608e-13*population);
document.getElementById("toowoomba_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toowoomba_east_livepop, 500);
}
