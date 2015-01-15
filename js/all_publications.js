$(function () { 
      $("[data-toggle='tooltip']").tooltip(); 
  });
  bibtex_reader = new BibtexDisplay()
  // TODO better structure for constraints
  constraints = {};
  function get_years(){
    years = bibtex_reader.get_years($("#bibtex_input").val());
    // years = [{"year":"2014","value":"1"},{"year":"2013","value":"2"}]
    $.each(years, function (key, value) {
      $('.panel-title').append('<button class="btn years_btn btn-primary" type="button" value=\''+key+'\' > '+key+' <span class="badge alert-info">'+value+'</span> </button> ');
    });
    $('.years_btn').click(function() {
                $(".bibtex_template").hide();
                constraints['YEAR']=$(this).val();
                (new BibtexDisplay()).displayBibtex($("#bibtex_input").val(), $("#bibtex_display"),constraints);
          });
    $('.allyears').click(function() {
      $(".bibtex_template").hide();
      delete constraints['YEAR'];
      (new BibtexDisplay()).displayBibtex($("#bibtex_input").val(), $("#bibtex_display"),constraints);
      });
  }
  function bibtex_js_draw() {
    year="all"
    $(".bibtex_template").hide();
    bibtex_reader.displayBibtex($("#bibtex_input").val(), $("#bibtex_display"),constraints);//'non',year);
  }
  $(document).ready( function() {
    // $('.years').append('<button class="btn btn-primary" type="button" value=\'2012\' onclick="bibtex_js_draw()"> 2012 </button> ');
    $("#bibtex_input").load( "publications.bib",   bibtex_js_draw );
    $("#bibtex_input").load( "publications.bib",   get_years );
    
  } );
