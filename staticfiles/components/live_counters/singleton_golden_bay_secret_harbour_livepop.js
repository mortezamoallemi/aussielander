function singleton_golden_bay_secret_harbour_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19609;
var increase = Math.round(passed*1.4452355654363e-12*population);
document.getElementById("singleton_golden_bay_secret_harbour_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(singleton_golden_bay_secret_harbour_livepop, 500);
}
