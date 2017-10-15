import 'moment';
import './datetime-moment';
var moment = require('moment');
require('datatables.net-bs4');
require('datatables.net-buttons-bs4');

$(document).ready(function(){
	$.fn.dataTable.moment('DD/MM/YYYY');

  $('#markets-table').DataTable( {
  	dom:
    "<'row'<'col-sm-3'l><'col-sm-6 text-center'><'col-sm-3 text-center'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-5'i><'col-sm-7'p>>",
  	lengthChange: false,
  	pageLength: 100,
  	order: [[ 2, 'desc' ]],
  	language: {
        search: '_INPUT_',
        searchPlaceholder: 'Search...'
    },
    initComplete: function(){
        $("#markets-table").show();
    }
  });

  var upcomingFilter = false;
	var ongoingFilter = false;
	var doneFilter = false;

  var tokenSalesTable = $('#token-sales-table').on('init.dt', function() {
  	$('.dt-buttons')
   		.attr('data-toggle', 'buttons');
	})
	.DataTable( {
  	dom:
    "<'row'<'col-sm-3'l><'col-sm-6 text-center'B><'col-sm-3 text-center'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons: {
    	dom: {
    		button: {
        	tag: 'button',
        	className: 'btn btn-sm btn-outline-primary'
      	}
    	},
    	buttons: [
    	{
        text: 'Upcoming',
        action: function ( e, dt, node, config ) {
        	upcomingFilter = !upcomingFilter;
					filter();
        }
      },
      {
        text: 'Ongoing',
        action: function ( e, dt, node, config ) {
        	ongoingFilter = !ongoingFilter;
					filter();
        }
      },
      {
        text: 'Done',
        action: function ( e, dt, node, config ) {
        	doneFilter = !doneFilter;
					filter();
        }
      }]
    },
  	lengthChange: false,
  	pageLength: 100,
  	order: [[ 8, 'desc' ]],
  	language: {
      search: '_INPUT_',
      searchPlaceholder: 'Search...'
    },
    initComplete: function(){
        $("#token-sales-table").show();
    }
  });

	function filter() {
  	$.fn.dataTable.ext.search.push(
		  function( settings, data, dataIndex ) {
				var todayDate = moment();
		    var startDate = moment(data[7], 'DD/MM/YYYY');
		    var endDate = moment( data[8], 'DD/MM/YYYY');

		    if (upcomingFilter && ongoingFilter && doneFilter) {
		    	return true;
		    } else if (upcomingFilter && ongoingFilter){
		    	if (todayDate <= endDate){ return true }
		    } else if (upcomingFilter && doneFilter){
		    	if ((todayDate <= startDate)||(endDate <= todayDate)){ return true }
		    } else if (ongoingFilter && doneFilter) {
		    	if (startDate <= todayDate){ return true }
		    } else if (upcomingFilter) {
			    if (todayDate <= startDate){ return true }
		    } else if (ongoingFilter) {
		    	if (startDate <= todayDate && todayDate <= endDate){ return true }
		    } else if (doneFilter) {
		    	if (endDate <= todayDate){ return true }
		    } else { return true }

		    return false;
		  }
		);
  	tokenSalesTable.draw();
  };
});
