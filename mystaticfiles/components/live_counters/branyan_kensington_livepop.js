function branyan_kensington_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4706;
var increase = Math.round(passed*1.2125864943879e-12*population);
document.getElementById("branyan_kensington_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(branyan_kensington_livepop, 500);
}
