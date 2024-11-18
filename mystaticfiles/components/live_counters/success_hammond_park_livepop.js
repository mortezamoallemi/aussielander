function success_hammond_park_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 14909;
var increase = Math.round(passed*1.96076672099231e-12*population);
document.getElementById("success_hammond_park_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(success_hammond_park_livepop, 500);
}
