function surfers_paradise_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23686;
var increase = Math.round(passed*1.17923675832564e-12*population);
document.getElementById("surfers_paradise_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(surfers_paradise_livepop, 500);
}
