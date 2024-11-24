function seaham_woodville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5412;
var increase = Math.round(passed*1.27837756373542e-13*population);
document.getElementById("seaham_woodville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(seaham_woodville_livepop, 500);
}
