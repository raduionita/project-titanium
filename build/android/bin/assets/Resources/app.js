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
var drag = require('drag');
// MODEL
var lastTouchPosition;
 
// VIEWS
var revolver = Titanium.UI.createView({
    backgroundImage: "images/flower.jpg",
    top: 190,
    left: 110,
    width: 100,
    height: 100
});
 
var rotationTransform = Titanium.UI.create2DMatrix();
 
// CONTROLLERS
revolver.addEventListener('touchstart', function(e){
    var touchPos = {x: e.x, y: e.y};
    lastTouchPosition = revolver.convertPointToView(touchPos, win);
});
 
revolver.addEventListener('touchmove', function(e){
    var touchPos = {x: e.x, y: e.y};
    var newTouchPosition = revolver.convertPointToView(touchPos, win);
 	Ti.Gesture.addEventListener('shake',function(e){
	alert("shake");
	});
    // Move revolver by difference between two touch positions
    revolver.top += newTouchPosition.y - lastTouchPosition.y;
    revolver.left += newTouchPosition.x - lastTouchPosition.x;
 
    lastTouchPosition = newTouchPosition;
});
win.open();

win.add(cartButton());

win.add(menuButton());

win.add(shareButton());
win.add(revolver);
