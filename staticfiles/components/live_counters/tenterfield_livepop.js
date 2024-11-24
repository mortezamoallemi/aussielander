function tenterfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6624;
var increase = Math.round(passed*-1.74694631011359e-13*population);
document.getElementById("tenterfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tenterfield_livepop, 500);
}
