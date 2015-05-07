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

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.00,
            description: '. . .',
            canPurchase: false,
            soldOut: false,
            reviews: [
                {
                    stars: 5,
                    body: "I love this product!",
                    author: "jd@sausage.com",
                    createdOn: Date.now() - 3600,
                },
                {
                    stars: 2,
                    body: "Somewhat lame",
                    author: "lamer@sample.com",
                    createdOn: Date.now() - 3600,
                },
            ],
        },
        {
            name: 'Cube',
            price: 3.95,
            description: '. . .',
            canPurchase: true,
        },  
    ]

})();
