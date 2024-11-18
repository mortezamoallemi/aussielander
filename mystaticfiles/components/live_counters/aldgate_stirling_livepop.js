function aldgate_stirling_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17472;
var increase = Math.round(passed*5.57802816818138e-14*population);
document.getElementById("aldgate_stirling_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(aldgate_stirling_livepop, 500);
}
