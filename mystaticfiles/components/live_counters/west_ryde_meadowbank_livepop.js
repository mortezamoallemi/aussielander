function west_ryde_meadowbank_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 19375;
var increase = Math.round(passed*8.28966320293118e-13*population);
document.getElementById("west_ryde_meadowbank_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(west_ryde_meadowbank_livepop, 500);
}
