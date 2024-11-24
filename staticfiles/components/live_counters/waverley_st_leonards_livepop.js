function waverley_st_leonards_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3506;
var increase = Math.round(passed*6.72844908132305e-14*population);
document.getElementById("waverley_st_leonards_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(waverley_st_leonards_livepop, 500);
}
