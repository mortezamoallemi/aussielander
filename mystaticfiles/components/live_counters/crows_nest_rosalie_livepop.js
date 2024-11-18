function crows_nest_rosalie_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8559;
var increase = Math.round(passed*3.73096642678939e-13*population);
document.getElementById("crows_nest_rosalie_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(crows_nest_rosalie_livepop, 500);
}
