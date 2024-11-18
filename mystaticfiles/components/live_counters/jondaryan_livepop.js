function jondaryan_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 7511;
var increase = Math.round(passed*1.46053843717976e-13*population);
document.getElementById("jondaryan_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(jondaryan_livepop, 500);
}
