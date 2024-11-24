function toowoomba_central_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13375;
var increase = Math.round(passed*3.61393223683661e-14*population);
document.getElementById("toowoomba_central_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(toowoomba_central_livepop, 500);
}
