(function() {

    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '. . .',
            canPurchase: false,
            soldOut: false,
        },
        {
            name: 'Cube',
            price: 3.95,
            description: '. . .',
            canPurchase: true,
        },  
    ]

})();
