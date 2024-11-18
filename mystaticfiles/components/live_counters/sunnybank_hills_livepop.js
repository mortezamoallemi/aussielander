function sunnybank_hills_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18087;
var increase = Math.round(passed*4.56437240178519e-13*population);
document.getElementById("sunnybank_hills_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sunnybank_hills_livepop, 500);
}
