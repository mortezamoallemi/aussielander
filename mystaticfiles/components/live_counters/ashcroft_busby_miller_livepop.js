function ashcroft_busby_miller_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 17335;
var increase = Math.round(passed*2.57214813629398e-13*population);
document.getElementById("ashcroft_busby_miller_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ashcroft_busby_miller_livepop, 500);
}
