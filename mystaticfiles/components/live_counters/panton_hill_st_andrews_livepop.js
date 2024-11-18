function panton_hill_st_andrews_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5152;
var increase = Math.round(passed*1.65869343792846e-13*population);
document.getElementById("panton_hill_st_andrews_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(panton_hill_st_andrews_livepop, 500);
}
