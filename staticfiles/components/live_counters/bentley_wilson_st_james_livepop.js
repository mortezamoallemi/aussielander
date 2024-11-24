function bentley_wilson_st_james_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 20062;
var increase = Math.round(passed*1.6168315481216e-13*population);
document.getElementById("bentley_wilson_st_james_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bentley_wilson_st_james_livepop, 500);
}
