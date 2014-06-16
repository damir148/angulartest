(function(){
	var app = angular.module('store', [ ]);
	
	// define StoreController
	app.controller('StoreController', function(){
		this.products = gems;
	});
	
	var gems = [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: '...',
			canPurchase: true,
			soldOut: false,
			images: [
				'images/1dodecahedronL.gif',
			],
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: '...',
			canPurchase: false,
			soldOut: false,
		},
	];
})();