function burdekin_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7916;
var increase = Math.round(passed*-1.76966972819188e-13*population);
document.getElementById("burdekin_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(burdekin_livepop, 500);
}
