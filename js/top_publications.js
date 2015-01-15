$(function () { 
  $("[data-toggle='tooltip']").tooltip(); 
});

bibtex_reader = new BibtexDisplay()
constraints = {};
constraints['LAST'] = 5;

function bibtex_js_draw() {
  $(".bibtex_template").hide();
  bibtex_reader.displayBibtex($("#bibtex_input").val(), $("#bibtex_display"),constraints);
}

$(document).ready( function() {
  $("#bibtex_input").load( "publications/publications.bib",   bibtex_js_draw );  
} );
