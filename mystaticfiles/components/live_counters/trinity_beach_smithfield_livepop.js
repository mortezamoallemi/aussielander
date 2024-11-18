function trinity_beach_smithfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13934;
var increase = Math.round(passed*1.55680725812852e-12*population);
document.getElementById("trinity_beach_smithfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(trinity_beach_smithfield_livepop, 500);
}
