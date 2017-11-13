import 'moment';
import './datetime-moment';
var moment = require('moment');
var numeral = require('numeral');
require('datatables.net-bs4');
require('datatables.net-buttons-bs4');

$(document).ready(function(){
	$.fn.dataTable.moment('DD MMM YY');

	// Markets Table

  var marketsTable = $('#markets-table').DataTable( {
  	dom:
    "<'row'<'col-sm-12'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-12'p>>",
  	lengthChange: false,
  	pageLength: 12,
  	language: {
        search: '_INPUT_',
        searchPlaceholder: 'Search...'
    }
  });

  if ($("#markets-table").length) {
		$.getJSON('https://api.coinmarketcap.com/v1/ticker/', function (data) {
	  	var coinData = data;
		  marketsTable.rows().every( function (rowIdx, tableLoop, rowLoop) {
		    var data = this.data();

		  	var rowNode = this.node();
		    var cryptoName = $(rowNode).find('#name')[0].innerText;

		    var coinDataRow;
		    for (var i = 0; i < coinData.length; i++) {
		    	if (coinData[i].name == cryptoName) {
		    		coinDataRow = coinData[i];
		    	}
		    }
		    data[2] = numeral(coinDataRow.market_cap_usd).format('$0,0');
		    data[3] = numeral(coinDataRow.price_usd).format('$0,0.00[0000]');
		    this.data(data);
			});
			marketsTable.order([2, 'desc']).draw();
			$("#markets-table").show();
	  });
  }

  // Tokensales table

  var upcomingFilter = false;
	var ongoingFilter = false;
	var doneFilter = false;

  var tokenSalesTable = $('#token-sales-table').on('init.dt', function() {
  	$('.dt-buttons')
   		.attr('data-toggle', 'buttons');
	})
	.DataTable( {
  	dom:
    "<'row'<'col-sm-6'f><'col-sm-6 text-right'B>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-12'p>>",
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
    columnDefs: [
    	{ targets: [6], visible: false}
    ],
    orderFixed: [ 6, 'asc' ],
  	lengthChange: false,
  	pageLength: 12,
  	order: [[ 4, 'desc' ]],
  	language: {
      search: '_INPUT_',
      searchPlaceholder: 'Search...'
    }
  });

	function filter() {
  	$.fn.dataTable.ext.search.push(
		  function( settings, data, dataIndex ) {
				var todayDate = moment();
		    var startDate = moment(data[3], 'DD MMM YY');
		    var endDate = moment( data[4], 'DD MMM YY');

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

  if ($("#token-sales-table").length) {
		$.getJSON('https://api.coinmarketcap.com/v1/ticker/', function (data) {
	  	var coinData = data;
		  tokenSalesTable.rows().every( function (rowIdx, tableLoop, rowLoop) {
		  	var data = this.data()
		    var rowNode = this.node();
		    var valuationCell = rowNode.cells[1];

		    var currency = valuationCell.className;
		    var amount = valuationCell.innerText;

		    var coinDataRow;
		    for (var i = 0; i < coinData.length; i++) {
		    	if (coinData[i].symbol == currency) {
		    		coinDataRow = coinData[i];
		    	}
		    }
		    if (coinDataRow && amount) {
		    	console.log(data)
		    	var cryptoValuation = numeral(data[1])._value;
		    	var cryptoPrice = numeral(coinDataRow.price_usd)._value;
		    	var valuationUSD = cryptoValuation * cryptoPrice;
		    	valuationCell.innerText = numeral(valuationUSD).format('($0,0)');
		    } else if (amount) {
		    	valuationCell.innerText = numeral(amount).format('($0,0)');
		    }
		    valuationCell.style.display = 'table-cell';
			});
	  });
  }
});
