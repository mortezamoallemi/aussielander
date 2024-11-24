function mowbray_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3735;
var increase = Math.round(passed*-2.71096684105131e-14*population);
document.getElementById("mowbray_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mowbray_livepop, 500);
}
