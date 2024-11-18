function smithfield_wetherill_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18045;
var increase = Math.round(passed*3.73856295683439e-13*population);
document.getElementById("smithfield_wetherill_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(smithfield_wetherill_park_livepop, 500);
}
