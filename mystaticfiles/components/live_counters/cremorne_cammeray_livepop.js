function cremorne_cammeray_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19084;
var increase = Math.round(passed*3.50466056370961e-13*population);
document.getElementById("cremorne_cammeray_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(cremorne_cammeray_livepop, 500);
}
