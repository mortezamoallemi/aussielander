function henley_beach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14840;
var increase = Math.round(passed*3.98142209550113e-13*population);
document.getElementById("henley_beach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(henley_beach_livepop, 500);
}
