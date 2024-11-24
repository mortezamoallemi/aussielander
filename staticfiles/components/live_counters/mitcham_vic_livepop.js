function mitcham_vic_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16148;
var increase = Math.round(passed*5.47682267499544e-13*population);
document.getElementById("mitcham_vic_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mitcham_vic_livepop, 500);
}
