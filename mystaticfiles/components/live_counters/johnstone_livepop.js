function johnstone_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7892;
var increase = Math.round(passed*2.99468454320715e-13*population);
document.getElementById("johnstone_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(johnstone_livepop, 500);
}
