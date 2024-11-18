function east_brisbane_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5783;
var increase = Math.round(passed*2.06197286167044e-13*population);
document.getElementById("east_brisbane_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_brisbane_livepop, 500);
}
