function yarralumla_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 2888;
var increase = Math.round(passed*-7.42268664252151e-14*population);
document.getElementById("yarralumla_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yarralumla_livepop, 500);
}
