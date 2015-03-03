'use strict';

/**
 * @ngdoc function
 * @name angularStoreApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the angularStoreApp
 */
angular.module('angularStoreApp')
  .controller('StoreCtrl', function () {
    this.products = [
      { name: 'Some Awesome Product', price: 123.45,
        images: [
          { full: 'product01-image01-full.jpg', thumb: 'product01-image01-thumb.jpg' },
          { full: 'product01-image02-full.jpg', thumb: 'product01-image02-thumb.jpg' },
          { full: 'product01-image03-full.jpg', thumb: 'product01-image03-thumb.jpg' },
        ],
        description: "This product is awesome!",
        specifications: "Filled with Awesome",
        reviews: [
          { body: "This product is awesome!", stars: 5, author: "fanboy@apple.com" },
          { body: "Would not buy again...", stars: 1, author: "hater@losers.com" },
        ],
      },
      { name: 'Some Other Awesome Product', price: 123.45,
        images: [
          { full: 'product02-image01-full.jpg', thumb: 'product02-image01-thumb.jpg' },
          { full: 'product02-image02-full.jpg', thumb: 'product02-image02-thumb.jpg' },
        ],
        description: "This product is ALSO awesome!",
        specifications: "Filled with Awesome",
        reviews: [ ]
      },
    ];
  });
