function margate_woody_point_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11695;
var increase = Math.round(passed*3.3458256217085e-13*population);
document.getElementById("margate_woody_point_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(margate_woody_point_livepop, 500);
}
