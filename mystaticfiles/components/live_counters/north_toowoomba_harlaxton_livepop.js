function north_toowoomba_harlaxton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5738;
var increase = Math.round(passed*-1.7334493568743e-13*population);
document.getElementById("north_toowoomba_harlaxton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(north_toowoomba_harlaxton_livepop, 500);
}
