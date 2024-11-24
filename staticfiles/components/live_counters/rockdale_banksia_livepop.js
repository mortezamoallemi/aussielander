function rockdale_banksia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19960;
var increase = Math.round(passed*5.42701481388128e-13*population);
document.getElementById("rockdale_banksia_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(rockdale_banksia_livepop, 500);
}
