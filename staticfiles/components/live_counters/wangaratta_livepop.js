function wangaratta_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18715;
var increase = Math.round(passed*3.58291697765955e-13*population);
document.getElementById("wangaratta_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wangaratta_livepop, 500);
}
