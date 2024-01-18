$(document).ready(function(){
  
    var arr = $("#aveTable tr");
    $.each(arr, function(i, item) {
      var currIndex = $("#aveTable tr").eq(i);
      var matchText = currIndex.children("td").first().text();
      $(this).nextAll().each(function(i, inItem) {
          if(matchText===$(this).children("td").first().text()) {
              $(this).remove();
          }
      });
  });
    
    
    $("#aveTable").DataTable({
      "order":[[0,"asc"]]
    });
    
  })