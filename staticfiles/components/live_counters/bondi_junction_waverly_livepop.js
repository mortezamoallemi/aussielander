function bondi_junction_waverly_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 16853;
var increase = Math.round(passed*3.91538576447315e-13*population);
document.getElementById("bondi_junction_waverly_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(bondi_junction_waverly_livepop, 500);
}
