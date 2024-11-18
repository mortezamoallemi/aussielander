function hallam_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10761;
var increase = Math.round(passed*3.6384845709355e-13*population);
document.getElementById("hallam_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hallam_livepop, 500);
}
