function stockton_fullerton_cove_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7495;
var increase = Math.round(passed*1.28535029826437e-12*population);
document.getElementById("stockton_fullerton_cove_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(stockton_fullerton_cove_livepop, 500);
}
