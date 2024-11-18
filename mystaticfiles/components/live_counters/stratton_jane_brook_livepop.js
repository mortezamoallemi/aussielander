function stratton_jane_brook_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6885;
var increase = Math.round(passed*1.52893069462134e-13*population);
document.getElementById("stratton_jane_brook_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(stratton_jane_brook_livepop, 500);
}
