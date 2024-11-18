function lindfield_roseville_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23147;
var increase = Math.round(passed*5.65911097254876e-13*population);
document.getElementById("lindfield_roseville_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lindfield_roseville_livepop, 500);
}
