function dickson_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2148;
var increase = Math.round(passed*2.36640513245699e-14*population);
document.getElementById("dickson_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dickson_livepop, 500);
}
