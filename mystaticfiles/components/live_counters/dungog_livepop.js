function dungog_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8976;
var increase = Math.round(passed*4.83591678677004e-13*population);
document.getElementById("dungog_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dungog_livepop, 500);
}
