function lambton_new_lambton_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16526;
var increase = Math.round(passed*4.62187766262966e-14*population);
document.getElementById("lambton_new_lambton_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(lambton_new_lambton_livepop, 500);
}
