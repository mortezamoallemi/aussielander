function hawthorn_east_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15165;
var increase = Math.round(passed*7.04306050490301e-13*population);
document.getElementById("hawthorn_east_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(hawthorn_east_livepop, 500);
}
