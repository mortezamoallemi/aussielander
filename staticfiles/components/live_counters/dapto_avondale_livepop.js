function dapto_avondale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23460;
var increase = Math.round(passed*2.65540505166763e-13*population);
document.getElementById("dapto_avondale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dapto_avondale_livepop, 500);
}
