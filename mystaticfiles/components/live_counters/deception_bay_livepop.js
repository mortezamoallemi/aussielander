function deception_bay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 22449;
var increase = Math.round(passed*1.97112761526578e-13*population);
document.getElementById("deception_bay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(deception_bay_livepop, 500);
}
