function south_arm_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4207;
var increase = Math.round(passed*2.00619541146027e-13*population);
document.getElementById("south_arm_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_arm_livepop, 500);
}
