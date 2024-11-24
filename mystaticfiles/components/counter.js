function australia_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23401891;
var increase = Math.round(passed*5.8536423988071311715e-13*population);
document.getElementById("australia_livepop").innerHTML =  (population + increase).toLocaleString()
var t = setTimeout(australia_livepop, 500);
}
