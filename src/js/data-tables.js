require('datatables.net-bs4');

$(document).ready(function(){
  $('#markets').DataTable( {
  	"lengthChange": false,
  	"pageLength": 100,
  	"order": [[ 2, 'desc' ]],
  	language: {
        search: "_INPUT_",
        searchPlaceholder: "Search..."
    }
  });

  $('#token-sales').DataTable( {
  	"lengthChange": false,
  	"pageLength": 100,
  	"order": [[ 8, 'desc' ]],
  	language: {
        search: "_INPUT_",
        searchPlaceholder: "Search..."
    }
  });
});


