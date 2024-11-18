function footscray_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16340;
var increase = Math.round(passed*1.3524083978011e-12*population);
document.getElementById("footscray_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(footscray_livepop, 500);
}
