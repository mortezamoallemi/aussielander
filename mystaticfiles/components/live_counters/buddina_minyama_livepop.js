function buddina_minyama_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 6428;
var increase = Math.round(passed*2.87609244631379e-13*population);
document.getElementById("buddina_minyama_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(buddina_minyama_livepop, 500);
}
