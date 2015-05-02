(function() {

    var app = angular.module('store', []);

    app.controller('StoreController', function() {
        this.products = gems;
    });

    app.controller('TabController', function() {
        this.tab = 1;

        this.select = function(sel) {
            this.tab = sel;
        };

        this.isSelected = function(sel) {
            return this.tab === sel;
        };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.00,
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
