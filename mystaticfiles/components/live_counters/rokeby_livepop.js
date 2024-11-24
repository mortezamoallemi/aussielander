function rokeby_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6109;
var increase = Math.round(passed*6.75232152219085e-13*population);
document.getElementById("rokeby_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rokeby_livepop, 500);
}
