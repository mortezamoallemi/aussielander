function colonel_light_gardens_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15600;
var increase = Math.round(passed*2.18367557213878e-13*population);
document.getElementById("colonel_light_gardens_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(colonel_light_gardens_livepop, 500);
}
