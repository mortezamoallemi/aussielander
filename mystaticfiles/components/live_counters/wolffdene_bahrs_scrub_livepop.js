function wolffdene_bahrs_scrub_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6105;
var increase = Math.round(passed*8.95564596378736e-13*population);
document.getElementById("wolffdene_bahrs_scrub_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(wolffdene_bahrs_scrub_livepop, 500);
}
