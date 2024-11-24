function coonabarabran_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7950;
var increase = Math.round(passed*-1.76220550962995e-13*population);
document.getElementById("coonabarabran_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coonabarabran_livepop, 500);
}
