import Typed from 'typed.js';

if ($("#typed").length){
	var typed = new Typed('#typed', {
		strings: ["Hire your 7/7 cryptocurrency analyst^500", "Learn how to use cryptocurrencies^500", "Invest in upcoming ICOs^500", "Get the latest news^500"],
	  startDelay: 3000,
	  typeSpeed: 80,
	  loop: true,
	  loopCount: Infinity,
	  fadeOut: true,
	  fadeOutClass: 'typed-fade-out',
	  fadeOutDelay: 500,
	});
}
