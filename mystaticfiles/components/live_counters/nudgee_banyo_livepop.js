function nudgee_banyo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 9618;
var increase = Math.round(passed*6.19438910479385e-13*population);
document.getElementById("nudgee_banyo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(nudgee_banyo_livepop, 500);
}
