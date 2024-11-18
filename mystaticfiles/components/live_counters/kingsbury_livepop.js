function kingsbury_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11330;
var increase = Math.round(passed*5.70678463929271e-13*population);
document.getElementById("kingsbury_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(kingsbury_livepop, 500);
}
