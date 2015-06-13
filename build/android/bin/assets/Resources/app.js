/*
 * Example app Android Canvas module
 * (c) WorldWise Learning 2013 - All rights reserved
 */


/* Open a single window */
var win = Ti.UI.createWindow({
	backgroundColor:'white',
	backgroundImage: 'images/model.png'
	
});

var cartButton = require('cart_button');
var menuButton = require('menu_button');
var shareButton = require('share_button');

win.open();

    /* Picker for canvas draws */
    var picker = Ti.UI.createPicker({
        right: 160,
        bottom:20,
        zIndex: 1000
    });
var shapes = [ {
				name: 'test',
				fn: function()
				{
					win.add();
				}
			},
			{
				name: 'test2',
				fn: function()
				{
					win.add();
				}
			}
];
    var rows = [];
    shapes.forEach(function(shape, index) {
        rows.push(Ti.UI.createPickerRow({
            index: index,
            title: shape.name
        }));
    });
    picker.add(rows);
    picker.selectionIndicator = true;
    win.add(picker);
   
   
    
    // Create an ImageView.
    var cart = Ti.UI.createImageView({
        image : 'images/shopping_cart_64.png',
        width : 32,
        height : 32,
        top : 200,
        left : 200
    });
    cart.addEventListener('load', function() {
        Ti.API.info('Image loaded!');
    });
    
    // Add to the parent view.
    win.add(cart);

win.add(cartButton());

win.add(menuButton());

win.add(shareButton());