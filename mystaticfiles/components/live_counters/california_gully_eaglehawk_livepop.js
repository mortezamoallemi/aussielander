function california_gully_eaglehawk_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11962;
var increase = Math.round(passed*1.0554990691308e-12*population);
document.getElementById("california_gully_eaglehawk_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(california_gully_eaglehawk_livepop, 500);
}
