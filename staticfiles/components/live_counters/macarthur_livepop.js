function macarthur_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 1426;
var increase = Math.round(passed*-1.45090991555964e-13*population);
document.getElementById("macarthur_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(macarthur_livepop, 500);
}
