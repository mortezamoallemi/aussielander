function katoomba_leura_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 13222;
var increase = Math.round(passed*1.46534820883629e-13*population);
document.getElementById("katoomba_leura_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(katoomba_leura_livepop, 500);
}
