function sandover_plenty_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 4035;
var increase = Math.round(passed*5.03568500918257e-13*population);
document.getElementById("sandover_plenty_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(sandover_plenty_livepop, 500);
}
