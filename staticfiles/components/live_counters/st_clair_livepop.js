function st_clair_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19895;
var increase = Math.round(passed*1.75567099325542e-14*population);
document.getElementById("st_clair_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(st_clair_livepop, 500);
}
