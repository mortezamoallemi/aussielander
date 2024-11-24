function rivervale_kewdale_cloverdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 25326;
var increase = Math.round(passed*9.32785173495516e-13*population);
document.getElementById("rivervale_kewdale_cloverdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rivervale_kewdale_cloverdale_livepop, 500);
}
