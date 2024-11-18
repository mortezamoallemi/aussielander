function glass_house_mountains_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5838;
var increase = Math.round(passed*3.26557912414971e-13*population);
document.getElementById("glass_house_mountains_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(glass_house_mountains_livepop, 500);
}
