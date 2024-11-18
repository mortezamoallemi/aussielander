function abbotsford_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8184;
var increase = Math.round(passed*3.24661298599695e-12*population);
document.getElementById("abbotsford_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(abbotsford_livepop, 500);
}
