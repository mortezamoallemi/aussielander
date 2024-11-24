function minto_st_andrews_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19887;
var increase = Math.round(passed*7.82351877914829e-13*population);
document.getElementById("minto_st_andrews_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(minto_st_andrews_livepop, 500);
}
