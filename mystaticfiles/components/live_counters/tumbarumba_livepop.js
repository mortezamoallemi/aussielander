function tumbarumba_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3445;
var increase = Math.round(passed*1.05810043606126e-13*population);
document.getElementById("tumbarumba_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(tumbarumba_livepop, 500);
}
