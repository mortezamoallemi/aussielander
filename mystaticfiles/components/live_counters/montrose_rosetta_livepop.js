function montrose_rosetta_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4879;
var increase = Math.round(passed*4.06614832294542e-13*population);
document.getElementById("montrose_rosetta_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(montrose_rosetta_livepop, 500);
}
