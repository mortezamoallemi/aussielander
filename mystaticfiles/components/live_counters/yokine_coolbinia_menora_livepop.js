function yokine_coolbinia_menora_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 15714;
var increase = Math.round(passed*3.6933720110249e-13*population);
document.getElementById("yokine_coolbinia_menora_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(yokine_coolbinia_menora_livepop, 500);
}
