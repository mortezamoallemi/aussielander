function narrabri_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7170;
var increase = Math.round(passed*2.16832521348838e-13*population);
document.getElementById("narrabri_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(narrabri_livepop, 500);
}
