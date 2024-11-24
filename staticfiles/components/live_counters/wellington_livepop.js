function wellington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8831;
var increase = Math.round(passed*1.51161888105516e-13*population);
document.getElementById("wellington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wellington_livepop, 500);
}
