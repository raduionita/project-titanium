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

win.add(cartButton());

win.add(menuButton());

win.add(shareButton());
win.add(revolver);
