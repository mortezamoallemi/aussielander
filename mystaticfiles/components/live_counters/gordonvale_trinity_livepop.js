function gordonvale_trinity_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 8666;
var increase = Math.round(passed*4.76297729400646e-13*population);
document.getElementById("gordonvale_trinity_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(gordonvale_trinity_livepop, 500);
}
