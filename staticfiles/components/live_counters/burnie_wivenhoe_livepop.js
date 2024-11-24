function burnie_wivenhoe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3603;
var increase = Math.round(passed*-3.15875933242653e-13*population);
document.getElementById("burnie_wivenhoe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burnie_wivenhoe_livepop, 500);
}
