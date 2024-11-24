function walkervale_avenell_heights_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 10696;
var increase = Math.round(passed*-1.77159562248462e-13*population);
document.getElementById("walkervale_avenell_heights_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(walkervale_avenell_heights_livepop, 500);
}
