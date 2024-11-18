function mermaid_beach_broadbeach_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 11916;
var increase = Math.round(passed*9.0275140612192e-13*population);
document.getElementById("mermaid_beach_broadbeach_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(mermaid_beach_broadbeach_livepop, 500);
}
