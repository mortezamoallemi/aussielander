function mermaid_waters_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 12168;
var increase = Math.round(passed*2.00138510957078e-13*population);
document.getElementById("mermaid_waters_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mermaid_waters_livepop, 500);
}
