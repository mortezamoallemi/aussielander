function punchbowl_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20753;
var increase = Math.round(passed*4.93611239190161e-13*population);
document.getElementById("punchbowl_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(punchbowl_livepop, 500);
}
