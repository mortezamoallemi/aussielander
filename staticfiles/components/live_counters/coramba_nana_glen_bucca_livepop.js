function coramba_nana_glen_bucca_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 3816;
var increase = Math.round(passed*3.97788295746804e-13*population);
document.getElementById("coramba_nana_glen_bucca_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(coramba_nana_glen_bucca_livepop, 500);
}
