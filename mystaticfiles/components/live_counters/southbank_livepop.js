function southbank_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 18670;
var increase = Math.round(passed*3.17934480380797e-12*population);
document.getElementById("southbank_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(southbank_livepop, 500);
}
