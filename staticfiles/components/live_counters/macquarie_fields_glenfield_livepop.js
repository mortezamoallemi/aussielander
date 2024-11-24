function macquarie_fields_glenfield_livepop() {
var start = new Date(2016, 07, 01);
var now = new Date();
var passed = now - start; // in milliseconds
var population = 23556;
var increase = Math.round(passed*7.49297637348523e-13*population);
document.getElementById("macquarie_fields_glenfield_livepop").innerHTML = (population + increase).toLocaleString()
var t = setTimeout(macquarie_fields_glenfield_livepop, 500);
}
