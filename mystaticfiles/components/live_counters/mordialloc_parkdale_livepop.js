function mordialloc_parkdale_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19913;
var increase = Math.round(passed*3.9146940861496e-13*population);
document.getElementById("mordialloc_parkdale_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mordialloc_parkdale_livepop, 500);
}
