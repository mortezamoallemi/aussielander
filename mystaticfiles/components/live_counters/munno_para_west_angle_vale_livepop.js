function munno_para_west_angle_vale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12130;
var increase = Math.round(passed*2.81580960376183e-12*population);
document.getElementById("munno_para_west_angle_vale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(munno_para_west_angle_vale_livepop, 500);
}
