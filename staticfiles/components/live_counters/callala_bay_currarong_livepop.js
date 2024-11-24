function callala_bay_currarong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3611;
var increase = Math.round(passed*1.49271252165181e-13*population);
document.getElementById("callala_bay_currarong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(callala_bay_currarong_livepop, 500);
}
