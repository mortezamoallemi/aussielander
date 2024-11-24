function south_townsville_railway_estate_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5209;
var increase = Math.round(passed*1.39091707846222e-13*population);
document.getElementById("south_townsville_railway_estate_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(south_townsville_railway_estate_livepop, 500);
}
