function dandenong_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 30676;
var increase = Math.round(passed*1.06766859700178e-12*population);
document.getElementById("dandenong_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dandenong_livepop, 500);
}
