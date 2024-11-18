function tuggerah_kangy_angy_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5301;
var increase = Math.round(passed*3.2523697249853e-13*population);
document.getElementById("tuggerah_kangy_angy_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tuggerah_kangy_angy_livepop, 500);
}
