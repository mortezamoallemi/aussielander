function woodville_cheltenham_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17487;
var increase = Math.round(passed*8.3944609145715e-13*population);
document.getElementById("woodville_cheltenham_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(woodville_cheltenham_livepop, 500);
}
