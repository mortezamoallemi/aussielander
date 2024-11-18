function sandgate_shorncliffe_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6781;
var increase = Math.round(passed*2.31438834346056e-13*population);
document.getElementById("sandgate_shorncliffe_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sandgate_shorncliffe_livepop, 500);
}
