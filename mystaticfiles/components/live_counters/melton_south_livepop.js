function melton_south_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23437;
var increase = Math.round(passed*2.49906708282974e-12*population);
document.getElementById("melton_south_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(melton_south_livepop, 500);
}
