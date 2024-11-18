function tumut_region_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4715;
var increase = Math.round(passed*9.62255977281563e-14*population);
document.getElementById("tumut_region_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tumut_region_livepop, 500);
}
