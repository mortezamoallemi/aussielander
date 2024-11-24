function bruthen_omeo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7743;
var increase = Math.round(passed*3.83199181915973e-13*population);
document.getElementById("bruthen_omeo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bruthen_omeo_livepop, 500);
}
