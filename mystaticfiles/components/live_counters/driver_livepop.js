function driver_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2885;
var increase = Math.round(passed*-1.64904548195024e-13*population);
document.getElementById("driver_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(driver_livepop, 500);
}
