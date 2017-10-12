import 'moment';
import './datetime-moment';
require('datatables.net-bs4');

$(document).ready(function(){
	$.fn.dataTable.moment( 'DD/MM/YYYY' );

  $('#markets-table').DataTable( {
  	"lengthChange": false,
  	"pageLength": 100,
  	"order": [[ 2, 'desc' ]],
  	language: {
        search: "_INPUT_",
        searchPlaceholder: "Search..."
    }
  });

  $('#token-sales-table').DataTable( {
  	"lengthChange": false,
  	"pageLength": 100,
  	"order": [[ 8, 'desc' ]],
  	language: {
      search: "_INPUT_",
      searchPlaceholder: "Search..."
    }
  });
});


