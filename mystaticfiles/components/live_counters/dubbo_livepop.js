function dubbo_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 36090;
var increase = Math.round(passed*3.78891002191882e-13*population);
document.getElementById("dubbo_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(dubbo_livepop, 500);
}
