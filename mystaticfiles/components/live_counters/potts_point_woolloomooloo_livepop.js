function potts_point_woolloomooloo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 21200;
var increase = Math.round(passed*1.02365339322355e-12*population);
document.getElementById("potts_point_woolloomooloo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(potts_point_woolloomooloo_livepop, 500);
}
