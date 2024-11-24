function smythes_creek_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3935;
var increase = Math.round(passed*2.56541460565795e-13*population);
document.getElementById("smythes_creek_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(smythes_creek_livepop, 500);
}
