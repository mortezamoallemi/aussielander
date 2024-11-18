function east_mackay_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3573;
var increase = Math.round(passed*-1.12592509916155e-13*population);
document.getElementById("east_mackay_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(east_mackay_livepop, 500);
}
