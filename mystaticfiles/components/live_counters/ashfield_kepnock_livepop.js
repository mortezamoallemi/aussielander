function ashfield_kepnock_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 5228;
var increase = Math.round(passed*3.08212231896334e-13*population);
document.getElementById("ashfield_kepnock_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(ashfield_kepnock_livepop, 500);
}
