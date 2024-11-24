function pearcedale_tooradin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7742;
var increase = Math.round(passed*2.19184163786947e-13*population);
document.getElementById("pearcedale_tooradin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(pearcedale_tooradin_livepop, 500);
}
