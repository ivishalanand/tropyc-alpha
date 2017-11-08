var numeral = require('numeral');

if ($('#valuation-cell-header').length) {
	var cryptoHeader = document.getElementById('valuation-cell-header').innerHTML;
	var cryptoCurrency;
	switch(cryptoHeader) {
    case 'ETH':
        cryptoCurrency = "ethereum";
        break;
    case 'BTC':
        cryptoCurrency = "bitcoin";
        break;
    default:
        cryptoCurrency = "ethereum";
	}
  $.getJSON(`https://api.coinmarketcap.com/v1/ticker/${cryptoCurrency}/`, function (data) {
    var baseValue = data[0].price_usd;
		$('#valuation-table tbody tr').each(function(){
			var cells = $(this).find('td')
	    var cryptoValue = numeral(cells[3].innerHTML);
	    var fiatValue = cryptoValue.multiply(baseValue)
	    cells[4].innerHTML = fiatValue.format('($0,0)');
		})
	});
};
