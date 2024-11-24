function maryland_fletcher_minmi_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13570;
var increase = Math.round(passed*1.20996736661615e-12*population);
document.getElementById("maryland_fletcher_minmi_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(maryland_fletcher_minmi_livepop, 500);
}
