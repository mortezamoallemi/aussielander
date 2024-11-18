function shepparton_mooroopna_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 49669;
var increase = Math.round(passed*4.17707822160927e-13*population);
document.getElementById("shepparton_mooroopna_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(shepparton_mooroopna_livepop, 500);
}
